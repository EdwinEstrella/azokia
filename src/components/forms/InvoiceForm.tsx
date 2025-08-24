import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface InvoiceFormData {
  clientName: string;
  clientEmail: string;
  projectName: string;
  description: string;
  amount: string;
  currency: string;
  dueDate: string;
  status: string;
}

interface InvoiceFormProps {
  onSubmit?: (data: InvoiceFormData) => void;
  onCancel?: () => void;
  initialData?: Partial<InvoiceFormData>;
}

export const InvoiceForm: React.FC<InvoiceFormProps> = ({
  onSubmit,
  onCancel,
  initialData = {}
}) => {
  const [formData, setFormData] = useState<InvoiceFormData>({
    clientName: '',
    clientEmail: '',
    projectName: '',
    description: '',
    amount: '',
    currency: 'USD',
    dueDate: '',
    status: 'pending',
    ...initialData
  });

  const handleChange = (field: keyof InvoiceFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="clientName">Nombre del Cliente</Label>
          <Input
            id="clientName"
            value={formData.clientName}
            onChange={(e) => handleChange('clientName', e.target.value)}
            placeholder="Ingrese nombre del cliente"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="clientEmail">Email del Cliente</Label>
          <Input
            id="clientEmail"
            type="email"
            value={formData.clientEmail}
            onChange={(e) => handleChange('clientEmail', e.target.value)}
            placeholder="cliente@ejemplo.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectName">Nombre del Proyecto</Label>
        <Input
          id="projectName"
          value={formData.projectName}
          onChange={(e) => handleChange('projectName', e.target.value)}
          placeholder="Ingrese nombre del proyecto"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Describe los servicios o productos facturados"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Monto</Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            value={formData.amount}
            onChange={(e) => handleChange('amount', e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="currency">Moneda</Label>
          <Select value={formData.currency} onValueChange={(value) => handleChange('currency', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar moneda" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD ($)</SelectItem>
              <SelectItem value="EUR">EUR (€)</SelectItem>
              <SelectItem value="DOP">DOP (RD$)</SelectItem>
              <SelectItem value="GBP">GBP (£)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dueDate">Fecha de Vencimiento</Label>
          <Input
            id="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={(e) => handleChange('dueDate', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Estado</Label>
        <Select value={formData.status} onValueChange={(value) => handleChange('status', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Borrador</SelectItem>
            <SelectItem value="pending">Pendiente</SelectItem>
            <SelectItem value="sent">Enviada</SelectItem>
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
        <Button type="submit">
          Crear Factura
        </Button>
      </div>
    </form>
  );
};
