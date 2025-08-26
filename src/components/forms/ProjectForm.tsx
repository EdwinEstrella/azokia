import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const projectSchema = z.object({
  name: z.string().min(1, 'El nombre del proyecto es requerido'),
  client_id: z.string().min(1, 'Selecciona un cliente'),
  description: z.string().optional(),
  type: z.enum(['corporate', 'ecommerce', 'application', 'maintenance']),
  status: z.enum(['pending', 'development', 'testing', 'completed', 'cancelled']),
  start_date: z.string().optional(),
  estimated_end_date: z.string().optional(),
  repository_url: z.string().optional(),
  production_url: z.string().optional(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  onSuccess: () => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onSuccess }) => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { createProject, getClients } = useDatabase(user!.id);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  React.useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const data = await getClients();
    setClients(data || []);
  };

  const onSubmit = async (data: ProjectFormData) => {
    setLoading(true);
    try {
      await createProject(data);
      onSuccess();
    } catch (error) {
      console.error('Error creating project:', error);
    } finally {
      setLoading(false);
    }
  };

  const startDateString = watch('start_date');
  const startDate = startDateString ? new Date(startDateString) : undefined;
  const estimatedEndDateString = watch('estimated_end_date');
  const estimatedEndDate = estimatedEndDateString ? new Date(estimatedEndDateString) : undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre del Proyecto *</Label>
          <Input
            id="name"
            placeholder="Mi increíble proyecto"
            {...register('name')}
            className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
          />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="client_id">Cliente *</Label>
          <Select onValueChange={(value) => setValue('client_id', value)}>
            <SelectTrigger className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]">
              <SelectValue placeholder="Selecciona un cliente" />
            </SelectTrigger>
            <SelectContent className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]">
              {clients.map((client) => (
                <SelectItem key={client.id} value={client.id}>
                  {client.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.client_id && (
            <p className="text-red-400 text-sm">{errors.client_id.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Tipo de Proyecto *</Label>
          <Select onValueChange={(value) => setValue('type', value as any)}>
            <SelectTrigger className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]">
              <SelectValue placeholder="Selecciona un tipo" />
            </SelectTrigger>
            <SelectContent className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]">
              <SelectItem value="corporate">Corporativo</SelectItem>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="application">Aplicación</SelectItem>
              <SelectItem value="maintenance">Mantenimiento</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Estado *</Label>
          <Select onValueChange={(value) => setValue('status', value as any)}>
            <SelectTrigger className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]">
              <SelectValue placeholder="Selecciona estado" />
            </SelectTrigger>
            <SelectContent className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]">
                <SelectItem value="pending">Pendiente</SelectItem>
                <SelectItem value="development">Desarrollo</SelectItem>
                <SelectItem value="testing">Pruebas</SelectItem>
                <SelectItem value="completed">Completado</SelectItem>
                <SelectItem value="cancelled">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Fecha de Inicio</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA] hover:bg-[#1E90FF]/20"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, 'PPP', { locale: es }) : 'Seleccionar fecha'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-[#0D0F2D] border-[#1E90FF]/20">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={(date) => setValue('start_date', date?.toISOString() || undefined)}
                initialFocus
                className="text-[#EAEAEA]"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Fecha Estimada de Fin</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA] hover:bg-[#1E90FF]/20"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {estimatedEndDate ? format(estimatedEndDate, 'PPP', { locale: es }) : 'Seleccionar fecha'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-[#0D0F2D] border-[#1E90FF]/20">
              <Calendar
                mode="single"
                selected={estimatedEndDate}
                onSelect={(date) => setValue('estimated_end_date', date?.toISOString() || undefined)}
                initialFocus
                className="text-[#EAEAEA]"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <textarea
          id="description"
          rows={3}
          {...register('description')}
          className="w-full px-3 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA] placeholder-[#EAEAEA]/40 resize-none"
          placeholder="Descripción del proyecto..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="repository_url">URL del Repositorio</Label>
          <Input
            id="repository_url"
            placeholder="https://github.com/..."
            {...register('repository_url')}
            className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="production_url">URL de Producción</Label>
          <Input
            id="production_url"
            placeholder="https://mi-proyecto.com"
            {...register('production_url')}
            className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Creando...
          </>
        ) : (
          'Crear Proyecto'
        )}
      </Button>
    </form>
  );
};
