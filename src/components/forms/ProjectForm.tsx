import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface ProjectFormData {
  name: string;
  description: string;
  clientName: string;
  clientEmail: string;
  startDate: string;
  endDate: string;
  status: string;
  priority: string;
  budget: string;
  currency: string;
}

interface ProjectFormProps {
  onSubmit?: (data: ProjectFormData) => void;
  onCancel?: () => void;
  initialData?: Partial<ProjectFormData>;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({
  onSubmit,
  onCancel,
  initialData = {}
}) => {
  const [formData, setFormData] = useState<ProjectFormData>({
    name: '',
    description: '',
    clientName: '',
    clientEmail: '',
    startDate: '',
    endDate: '',
    status: 'planning',
    priority: 'medium',
    budget: '',
    currency: 'USD',
    ...initialData
  });

  const handleChange = (field: keyof ProjectFormData, value: string) => {
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
      <div className="space-y-2">
        <Label htmlFor="name">Nombre del Proyecto</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
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
          placeholder="Describe el proyecto, objetivos y alcance"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="clientName">Nombre del Cliente</Label>
          <Input
            id="clientName"
            value={formData.clientName}
            onChange={(e) => handleChange('clientName', e.target.value)}
            placeholder="Nombre del cliente"
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
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startDate">Fecha de Inicio</Label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="endDate">Fecha de Finalización</Label>
          <Input
            id="endDate"
            type="date"
            value={formData.endDate}
            onChange={(e) => handleChange('endDate', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="status">Estado</Label>
          <Select value={formData.status} onValueChange={(value) => handleChange('status', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="planning">Planificación</SelectItem>
              <SelectItem value="in-progress">En Progreso</SelectItem>
              <SelectItem value="review">En Revisión</SelectItem>
              <SelectItem value="completed">Completado</SelectItem>
              <SelectItem value="on-hold">En Pausa</SelectItem>
              <SelectItem value="cancelled">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="priority">Prioridad</Label>
          <Select value={formData.priority} onValueChange={(value) => handleChange('priority', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar prioridad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Baja</SelectItem>
              <SelectItem value="medium">Media</SelectItem>
              <SelectItem value="high">Alta</SelectItem>
              <SelectItem value="urgent">Urgente</SelectItem>
            </SelectContent>
          </Select>
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Presupuesto</Label>
        <Input
          id="budget"
          type="number"
          step="0.01"
          value={formData.budget}
          onChange={(e) => handleChange('budget', e.target.value)}
          placeholder="0.00"
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
        )}
        <Button type="submit">
          Crear Proyecto
        </Button>
      </div>
    </form>
  );
};
