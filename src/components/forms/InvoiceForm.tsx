import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../hooks/useAuth';
import { Database } from '../../types/supabase';
import { AddClientModal } from '../AddClientModal'; // Import the modal
import { PlusCircle } from 'lucide-react';

type Client = Database['public']['Tables']['clients']['Row'];
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
  const { createInvoice, getClients, createInvoiceItem } = useDatabase(user?.id || '');
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);

  const [formData, setFormData] = useState<InvoiceFormData>({
    client_id: initialData.client_id || '',
    project_id: initialData.project_id || '',
    issue_date: initialData.issue_date || new Date().toISOString().split('T')[0],
    due_date: initialData.due_date || '',
    status: initialData.status || 'pending',
    items: initialData.items || [{ concept: '', quantity: 1, unit_price: 0 }],
  });

  const fetchClients = useCallback(async () => {
    if (user?.id) {
      try {
        const fetchedClients = await getClients();
        setClients(fetchedClients);
      } catch (err) {
        console.error('Error fetching clients:', err);
      }
    }
  }, [user?.id, getClients]);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const handleClientSelection = (value: string) => {
    if (value === 'add-new-client') {
      setIsAddClientModalOpen(true);
    } else {
      handleChange('client_id', value);
    }
  };

  const handleNewClientSuccess = () => {
    fetchClients();
  };

  const handleChange = (field: keyof InvoiceFormData, value: string | number | { concept: string; quantity: number; unit_price: number; }[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (index: number, field: keyof InvoiceFormData['items'][0], value: string | number) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const total_amount = formData.items.reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);
      const subtotal_amount = total_amount;

      const newInvoice: CreateInvoiceData = {
        client_id: formData.client_id,
        project_id: formData.project_id || null,
        issue_date: formData.issue_date,
        due_date: formData.due_date,
        status: formData.status,
        subtotal: subtotal_amount,
        total: total_amount,
        user_id: user!.id,
        invoice_number: `INV-${Date.now()}`
      };

      const createdInvoice = await createInvoice(newInvoice);

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
      <AddClientModal 
        open={isAddClientModalOpen} 
        onOpenChange={setIsAddClientModalOpen} 
        onSuccess={handleNewClientSuccess} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="client_id">Cliente *</Label>
          <Select value={formData.client_id} onValueChange={handleClientSelection}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar cliente" />
            </SelectTrigger>
            <SelectContent>
              {clients.map(client => (
                <SelectItem key={client.id} value={client.id}>{client.name}</SelectItem>
              ))}
              <div className="border-t my-1"></div>
              <Button 
                variant="ghost" 
                className="w-full justify-start p-2 text-sm"
                onClick={(e) => { e.preventDefault(); handleClientSelection('add-new-client'); }}
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Agregar Nuevo Cliente
              </Button>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Rest of the form remains the same */}
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
