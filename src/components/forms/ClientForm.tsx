import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useSupabase } from '../../hooks/useSupabase';

interface ClientFormProps {
  onSuccess?: () => void;
  initialData?: any;
}

export const ClientForm: React.FC<ClientFormProps> = ({ onSuccess, initialData }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    address: initialData?.address || '',
    birth_date: initialData?.birth_date || '',
    status: initialData?.status || 'ACTIVE'
  });
  const [loading, setLoading] = useState(false);
  const { createClient } = useSupabase('user-id');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await createClient(formData);
      onSuccess?.();
    } catch (error) {
      console.error('Error creating client:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-[#EAEAEA]">Nombre completo</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-[#EAEAEA]">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-[#EAEAEA]">Teléfono</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
        />
      </div>

      <div>
        <Label htmlFor="address" className="text-[#EAEAEA]">Dirección</Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
        />
      </div>

      <div>
        <Label htmlFor="birth_date" className="text-[#EAEAEA]">Fecha de nacimiento</Label>
        <Input
          id="birth_date"
          name="birth_date"
          type="date"
          value={formData.birth_date}
          onChange={handleChange}
          className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
        />
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
          <option value="INACTIVE">Inactivo</option>
          <option value="SUSPENDED">Suspendido</option>
        </select>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90"
        disabled={loading}
      >
        {loading ? 'Creando...' : initialData ? 'Actualizar Cliente' : 'Crear Cliente'}
      </Button>
    </form>
  );
};
