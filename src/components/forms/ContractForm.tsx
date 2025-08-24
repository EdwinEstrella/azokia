import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useSupabase } from '../../hooks/useSupabase';

interface ContractFormProps {
  onSuccess?: () => void;
  initialData?: any;
}

export const ContractForm: React.FC<ContractFormProps> = ({ onSuccess, initialData }) => {
  const [clients, setClients] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    client_id: initialData?.client_id || '',
    product_id: initialData?.product_id || '',
    amount: initialData?.amount || '',
    payment_type: initialData?.payment_type || 'MONTHLY',
    start_date: initialData?.start_date || '',
    end_date: initialData?.end_date || '',
    status: initialData?.status || 'ACTIVE'
  });
  const [loading, setLoading] = useState(false);
  const { createContract, getClients, getProducts } = useSupabase('user-id');

  useEffect(() => {
    loadClientsAndProducts();
  }, []);

  const loadClientsAndProducts = async () => {
    const [clientsData, productsData] = await Promise.all([
      getClients(),
      getProducts()
    ]);
    setClients(clientsData || []);
    setProducts(productsData || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await createContract({
        ...formData,
        amount: parseFloat(formData.amount)
      });
      onSuccess?.();
    } catch (error) {
      console.error('Error creating contract:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title" className="text-[#EAEAEA]">Título del contrato</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
        />
      </div>

      <div>
        <Label htmlFor="description" className="text-[#EAEAEA]">Descripción</Label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA] resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="client_id" className="text-[#EAEAEA]">Cliente</Label>
          <select
            id="client_id"
            name="client_id"
            value={formData.client_id}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA]"
          >
            <option value="">Seleccionar cliente</option>
            {clients.map(client => (
              <option key={client.id} value={client.id}>{client.name}</option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="product_id" className="text-[#EAEAEA]">Producto/Servicio</Label>
          <select
            id="product_id"
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA]"
          >
            <option value="">Seleccionar producto</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="amount" className="text-[#EAEAEA]">Monto</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            required
            className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
          />
        </div>

        <div>
          <Label htmlFor="payment_type" className="text-[#EAEAEA]">Tipo de pago</Label>
          <select
            id="payment_type"
            name="payment_type"
            value={formData.payment_type}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA]"
          >
            <option value="MONTHLY">Mensual</option>
            <option value="QUARTERLY">Trimestral</option>
            <option value="ANNUAL">Anual</option>
            <option value="ONE_TIME">Única vez</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="start_date" className="text-[#EAEAEA]">Fecha de inicio</Label>
          <Input
            id="start_date"
            name="start_date"
            type="date"
            value={formData.start_date}
            onChange={handleChange}
            required
            className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
          />
        </div>

        <div>
          <Label htmlFor="end_date" className="text-[#EAEAEA]">Fecha de fin (opcional)</Label>
          <Input
            id="end_date"
            name="end_date"
            type="date"
            value={formData.end_date}
            onChange={handleChange}
            className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="status" className="text-[#EAEAEA]">Estado</Label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA]"
        >
          <option value="ACTIVE">Activo</option>
          <option value="SUSPENDED">Suspendido</option>
          <option value="COMPLETED">Completado</option>
          <option value="CANCELLED">Cancelado</option>
        </select>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90"
        disabled={loading}
      >
        {loading ? 'Creando...' : initialData ? 'Actualizar Contrato' : 'Crear Contrato'}
      </Button>
    </form>
  );
};
