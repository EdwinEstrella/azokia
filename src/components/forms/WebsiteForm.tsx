import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSupabase } from '../../hooks/useSupabase';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const websiteSchema = z.object({
  domain: z.string().min(1, 'El dominio es requerido'),
  client_id: z.string().min(1, 'Selecciona un cliente'),
  hosting_provider: z.string().optional(),
  status: z.enum(['ACTIVE', 'MAINTENANCE', 'DOWN', 'DEVELOPMENT']),
  renewal_date: z.date().optional(),
  ssl_expiry: z.date().optional(),
  notes: z.string().optional(),
});

type WebsiteFormData = z.infer<typeof websiteSchema>;

interface WebsiteFormProps {
  onSuccess: () => void;
}

export const WebsiteForm: React.FC<WebsiteFormProps> = ({ onSuccess }) => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { createWebsite, getClients } = useSupabase();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<WebsiteFormData>({
    resolver: zodResolver(websiteSchema),
  });

  React.useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const data = await getClients();
    setClients(data || []);
  };

  const onSubmit = async (data: WebsiteFormData) => {
    setLoading(true);
    try {
      await createWebsite(data);
      onSuccess();
    } catch (error) {
      console.error('Error creating website:', error);
    } finally {
      setLoading(false);
    }
  };

  const renewalDate = watch('renewal_date');
  const sslExpiry = watch('ssl_expiry');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="domain">Dominio *</Label>
          <Input
            id="domain"
            placeholder="ejemplo.com"
            {...register('domain')}
            className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
          />
          {errors.domain && (
            <p className="text-red-400 text-sm">{errors.domain.message}</p>
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
          <Label htmlFor="hosting_provider">Proveedor de Hosting</Label>
          <Input
            id="hosting_provider"
            placeholder="DigitalOcean, AWS, etc."
            {...register('hosting_provider')}
            className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Estado *</Label>
          <Select onValueChange={(value) => setValue('status', value as any)}>
            <SelectTrigger className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]">
              <SelectValue placeholder="Selecciona estado" />
            </SelectTrigger>
            <SelectContent className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]">
              <SelectItem value="ACTIVE">Activo</SelectItem>
              <SelectItem value="MAINTENANCE">Mantenimiento</SelectItem>
              <SelectItem value="DOWN">Caído</SelectItem>
              <SelectItem value="DEVELOPMENT">Desarrollo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Fecha de Renovación</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA] hover:bg-[#1E90FF]/20"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {renewalDate ? format(renewalDate, 'PPP', { locale: es }) : 'Seleccionar fecha'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-[#0D0F2D] border-[#1E90FF]/20">
              <Calendar
                mode="single"
                selected={renewalDate}
                onSelect={(date) => setValue('renewal_date', date || undefined)}
                initialFocus
                className="text-[#EAEAEA]"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Vencimiento SSL</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA] hover:bg-[#1E90FF]/20"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {sslExpiry ? format(sslExpiry, 'PPP', { locale: es }) : 'Seleccionar fecha'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-[#0D0F2D] border-[#1E90FF]/20">
              <Calendar
                mode="single"
                selected={sslExpiry}
                onSelect={(date) => setValue('ssl_expiry', date || undefined)}
                initialFocus
                className="text-[#EAEAEA]"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notas</Label>
        <textarea
          id="notes"
          rows={3}
          {...register('notes')}
          className="w-full px-3 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA] placeholder-[#EAEAEA]/40 resize-none"
          placeholder="Notas adicionales sobre el website..."
        />
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
          'Crear Website'
        )}
      </Button>
    </form>
  );
};
