import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../hooks/useAuth';
import { Database } from '../../types/supabase';

type Client = Database['public']['Tables']['clients']['Row'];

const contractSchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  contract_number: z.string().min(1, 'El número de contrato es requerido'),
  client_id: z.string().min(1, 'Selecciona un cliente'),
  amount: z.number().min(0, 'El valor debe ser mayor o igual a 0'),
  status: z.enum(['draft', 'sent', 'signed', 'completed', 'cancelled']),
  start_date: z.string().min(1, 'Fecha de inicio requerida'),
  end_date: z.string().min(1, 'Fecha de fin requerida'),
  description: z.string().optional()
});

type ContractFormData = z.infer<typeof contractSchema>;

interface ContractFormProps {
  onSuccess: () => void;
  initialData?: Partial<ContractFormData>;
}

export const ContractForm: React.FC<ContractFormProps> = ({ onSuccess, initialData }) => {
  const [clients, setClients] = useState<Client[]>([]);
  const { user } = useAuth();
  const { createContract, getClients } = useDatabase(user?.id || '');
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<ContractFormData>({
    resolver: zodResolver(contractSchema),
    defaultValues: {
      ...initialData,
      start_date: initialData?.start_date ? new Date(initialData.start_date).toISOString().split('T')[0] : '',
      end_date: initialData?.end_date ? new Date(initialData.end_date).toISOString().split('T')[0] : '',
    }
  });

  React.useEffect(() => {
    if (user?.id) {
      const fetchClients = async () => {
        try {
          const fetchedClients = await getClients();
          setClients(fetchedClients);
        } catch (err) {
          console.error('Error fetching clients:', err);
        }
      };
      fetchClients();
    }
  }, [user?.id, getClients]);

  

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Título del Contrato</Label>
          <Input
            id="title"
            {...register('title')}
            placeholder="Ej: Contrato de Servicios"
            className={errors.title ? 'border-red-500' : ''}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contract_number">Número de Contrato</Label>
          <Input
            id="contract_number"
            {...register('contract_number')}
            placeholder="Ej: CT-2024-001"
            className={errors.contract_number ? 'border-red-500' : ''}
          />
          {errors.contract_number && <p className="text-red-500 text-sm">{errors.contract_number.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="client_id">Cliente *</Label>
        <Select onValueChange={(value) => setValue('client_id', value)} defaultValue={initialData?.client_id}>
          <SelectTrigger className={errors.client_id ? 'border-red-500' : ''}>
            <SelectValue placeholder="Selecciona un cliente" />
          </SelectTrigger>
          <SelectContent>
            {clients.map((client) => (
              <SelectItem key={client.id} value={client.id}>
                {client.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.client_id && <p className="text-red-500 text-sm">{errors.client_id.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Valor ($)</Label>
          <Input
            id="amount"
            type="number"
            {...register('amount', { valueAsNumber: true })}
            placeholder="0.00"
            className={errors.amount ? 'border-red-500' : ''}
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Estado</Label>
          <Select
            onValueChange={(value) => setValue('status', value as any)}
            defaultValue={initialData?.status}
          >
            <SelectTrigger className={errors.status ? 'border-red-500' : ''}>
              <SelectValue placeholder="Seleccionar estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Borrador</SelectItem>
              <SelectItem value="sent">Enviado</SelectItem>
              <SelectItem value="signed">Firmado</SelectItem>
              <SelectItem value="completed">Completado</SelectItem>
              <SelectItem value="cancelled">Cancelado</SelectItem>
            </SelectContent>
          </Select>
          {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Fecha de Inicio</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start text-left font-normal ${errors.start_date ? 'border-red-500' : ''}`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {watch('start_date') ? format(new Date(watch('start_date')), 'PPP', { locale: es }) : 'Seleccionar fecha'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={watch('start_date') ? new Date(watch('start_date')) : undefined}
                onSelect={(date) => setValue('start_date', date?.toISOString() || '')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.start_date && <p className="text-red-500 text-sm">{errors.start_date.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Fecha de Fin</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start text-left font-normal ${errors.end_date ? 'border-red-500' : ''}`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {watch('end_date') ? format(new Date(watch('end_date')), 'PPP', { locale: es }) : 'Seleccionar fecha'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={watch('end_date') ? new Date(watch('end_date')) : undefined}
                onSelect={(date) => setValue('end_date', date?.toISOString() || '')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.end_date && <p className="text-red-500 text-sm">{errors.end_date.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción (Opcional)</Label>
        <Input
          id="description"
          {...register('description')}
          placeholder="Descripción del contrato"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Guardando...
          </>
        ) : (
          'Guardar Contrato'
        )}
      </Button>
    </form>
  );
};
