import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../hooks/useAuth';
import { Database } from '../../types/supabase';

type Client = Database['public']['Tables']['clients']['Row'];
type Project = Database['public']['Tables']['projects']['Row'];
type CreateInvoiceData = Database['public']['Tables']['invoices']['Insert'];
type CreateInvoiceItemData = Database['public']['Tables']['invoice_items']['Insert'];

interface InvoiceFormData {
  client_id: string;
  project_id?: string;
  issue_date: string;
  due_date: string;
  status: 'pending' | 'paid' | 'overdue' | 'cancelled';
  items: { concept: string; quantity: number; unit_price: number; }[];
}

interface InvoiceFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  initialData?: Partial<InvoiceFormData>;
}

export const InvoiceForm: React.FC<InvoiceFormProps> = ({
  onSuccess,
  onCancel,
  initialData = {}
}) => {
  const { user } = useAuth();
        const { createInvoice, getClients, getProjects, createInvoiceItem, createClient } = useDatabase(user?.id || '');
  const [clients, setClients] = useState<Client[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [showNewClientForm, setShowNewClientForm] = useState(false);
  const [newClientData, setNewClientData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [formData, setFormData] = useState<InvoiceFormData>({
    client_id: initialData.client_id || '',
    project_id: initialData.project_id || '',
    issue_date: initialData.issue_date || new Date().toISOString().split('T')[0],
    due_date: initialData.due_date || '',
    status: initialData.status || 'pending',
    items: initialData.items || [{ concept: '', quantity: 1, unit_price: 0 }],
  });

  useEffect(() => {
    if (user?.id) {
      const fetchClientsAndProjects = async () => {
        try {
          const fetchedClients = await getClients();
          setClients(fetchedClients);
          const fetchedProjects = await getProjects();
          setProjects(fetchedProjects);
        } catch (err) {
          console.error('Error fetching clients or projects:', err);
        }
      };
      fetchClientsAndProjects();
    }
  }, [user?.id, getClients, getProjects]);

  const handleChange = (field: keyof InvoiceFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (index: number, field: keyof (typeof formData.items)[0], value: any) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const handleAddItem = () => {
    setFormData(prev => ({ ...prev, items: [...prev.items, { concept: '', quantity: 1, unit_price: 0 }] }));
  };

  const handleRemoveItem = (index: number) => {
    setFormData(prev => ({ ...prev, items: prev.items.filter((_, i) => i !== index) }));
  };

  const handleCreateNewClient = async () => {
    if (!user?.id) return;
    setLoading(true);
    try {
      const newClient = await createClient({
        name: newClientData.name,
        email: newClientData.email,
        address: newClientData.address,
        phone: newClientData.phone,
        user_id: user.id,
      });
      // Add the new client to the clients list
      setClients(prev => [...prev, newClient]);
      // Select the new client in the dropdown
      handleChange('client_id', newClient.id);
      // Hide the new client form
      setShowNewClientForm(false);
      // Clear new client form data
      setNewClientData({ name: '', email: '', address: '', phone: '' });
    } catch (error) {
      console.error('Error creating new client:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Calculate total amount
      const total_amount = formData.items.reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);
      const subtotal_amount = total_amount; // Assuming no taxes for now, subtotal equals total

      const newInvoice: CreateInvoiceData = {
        client_id: formData.client_id,
        project_id: formData.project_id || null,
        issue_date: formData.issue_date,
        due_date: formData.due_date,
        status: formData.status,
        subtotal: subtotal_amount,
        total: total_amount,
        user_id: user!.id,
        invoice_number: `INV-${Date.now()}` // Simple invoice number generation
      };

      const createdInvoice = await createInvoice(newInvoice);

      // Create invoice items
      for (const item of formData.items) {
        const newInvoiceItem: CreateInvoiceItemData = {
          invoice_id: createdInvoice.id,
          concept: item.concept,
          quantity: item.quantity,
          unit_price: item.unit_price,
          subtotal: item.quantity * item.unit_price,
        };
        await createInvoiceItem(newInvoiceItem);
      }

      onSuccess?.();
    } catch (error) {
      console.error('Error creating invoice:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="client_id">Cliente *</Label>
          <Select value={formData.client_id} onValueChange={(value) => handleChange('client_id', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar cliente" />
            </SelectTrigger>
            <SelectContent>
              {clients.map(client => (
                <SelectItem key={client.id} value={client.id}>{client.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {!showNewClientForm && (
          <div className="col-span-2 flex justify-end">
            <Button type="button" variant="outline" onClick={() => setShowNewClientForm(true)}>
              Crear Nuevo Cliente
            </Button>
          </div>
        )}
      </div>

      {showNewClientForm && (
        <div className="space-y-2 border p-4 rounded-lg bg-[#0D0F2D]/50 border-[#1E90FF]/30">
          <h4 className="text-lg font-semibold text-[#EAEAEA] mb-4">Nuevo Cliente</h4>
          <div>
            <Label htmlFor="newClientName" className="text-[#EAEAEA]">Nombre</Label>
            <Input id="newClientName" value={newClientData.name} onChange={(e) => setNewClientData(prev => ({ ...prev, name: e.target.value }))} className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]" />
          </div>
          <div>
            <Label htmlFor="newClientEmail" className="text-[#EAEAEA]">Email</Label>
            <Input id="newClientEmail" type="email" value={newClientData.email} onChange={(e) => setNewClientData(prev => ({ ...prev, email: e.target.value }))} className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]" />
          </div>
          <div>
            <Label htmlFor="newClientPhone" className="text-[#EAEAEA]">Teléfono</Label>
            <Input id="newClientPhone" value={newClientData.phone} onChange={(e) => setNewClientData(prev => ({ ...prev, phone: e.target.value }))} className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]" />
          </div>
          <div>
            <Label htmlFor="newClientAddress" className="text-[#EAEAEA]">Dirección</Label>
            <Input id="newClientAddress" value={newClientData.address} onChange={(e) => setNewClientData(prev => ({ ...prev, address: e.target.value }))} className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]" />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setShowNewClientForm(false)}>
              Cancelar
            </Button>
            <Button type="button" onClick={handleCreateNewClient} disabled={loading}>
              {loading ? 'Creando...' : 'Guardar Nuevo Cliente'}
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="issue_date">Fecha de Emisión *</Label>
          <Input
            id="issue_date"
            type="date"
            value={formData.issue_date}
            onChange={(e) => handleChange('issue_date', e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="due_date">Fecha de Vencimiento *</Label>
          <Input
            id="due_date"
            type="date"
            value={formData.due_date}
            onChange={(e) => handleChange('due_date', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#EAEAEA]">Items de Factura</h3>
        {formData.items.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor={`concept-${index}`}>Concepto</Label>
              <Input
                id={`concept-${index}`}
                value={item.concept}
                onChange={(e) => handleItemChange(index, 'concept', e.target.value)}
                placeholder="Concepto del servicio/producto"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`quantity-${index}`}>Cantidad</Label>
              <Input
                id={`quantity-${index}`}
                type="number"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                required
                min="1"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`unit_price-${index}`}>Precio Unitario</Label>
              <Input
                id={`unit_price-${index}`}
                type="number"
                step="0.01"
                value={item.unit_price}
                onChange={(e) => handleItemChange(index, 'unit_price', parseFloat(e.target.value))}
                required
                min="0"
              />
            </div>
            {formData.items.length > 1 && (
              <Button type="button" variant="destructive" onClick={() => handleRemoveItem(index)} className="md:col-span-1">
                Eliminar
              </Button>
            )}
          </div>
        ))}
        <Button type="button" variant="outline" onClick={handleAddItem}>
          Agregar Item
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Estado</Label>
        <Select value={formData.status} onValueChange={(value) => handleChange('status', value as 'pending' | 'paid' | 'overdue' | 'cancelled')}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pendiente</SelectItem>
            <SelectItem value="paid">Pagada</SelectItem>
            <SelectItem value="overdue">Vencida</SelectItem>
            <SelectItem value="cancelled">Cancelada</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
        )}
        <Button type="submit" disabled={loading}>
          {loading ? 'Creando...' : 'Crear Factura'}
        </Button>
      </div>
    </form>
  );
};
