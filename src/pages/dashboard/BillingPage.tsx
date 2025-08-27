import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Plus, Search, FileText, Calendar, DollarSign, Download, Send, CheckCircle, Clock } from 'lucide-react';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { InvoiceForm } from '../../components/forms/InvoiceForm';
import { Database } from '../../types/supabase';

type Invoice = Database['public']['Tables']['invoices']['Row'];
type InvoiceWithClientAndItems = Invoice & { clients: { name: string } | null; invoice_items: { id: string; concept: string; description: string | null; quantity: number; unit_price: number; total_price: number }[]; };

const BillingPage: React.FC = () => {
  const [invoices, setInvoices] = useState<InvoiceWithClientAndItems[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useAuth();
  const { getInvoices, loading } = useDatabase(user?.id || '');

  useEffect(() => {
    if (user?.id) {
      const loadInvoices = async () => {
        try {
          const data = await getInvoices();
          setInvoices(data || []);
        } catch (err) {
          console.error('Error loading invoices:', err);
        }
      };
      loadInvoices();
    }
  }, [user?.id, getInvoices]);

  const handleInvoiceCreated = () => {
    setIsDialogOpen(false);
    if (user?.id) {
      const loadInvoices = async () => {
        try {
          const data = await getInvoices();
          setInvoices(data || []);
        } catch (err) {
          console.error('Error loading invoices:', err);
        }
      };
      loadInvoices();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Facturación</h1>
          <p className="text-[#EAEAEA]/70">Facturas que enviamos a nuestros clientes</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
              <Plus className="h-4 w-4 mr-2" />
              Nueva Factura
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0D0F2D] border-[#1E90FF]/30 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-[#EAEAEA]">Crear Nueva Factura</DialogTitle>
            </DialogHeader>
            <InvoiceForm onSuccess={handleInvoiceCreated} />
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-6 mb-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EAEAEA]/40 h-4 w-4" />
            <Input
              placeholder="Buscar facturas..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="pl-10 bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA]"
          >
            <option value="ALL">Todos los estados</option>
            <option value="paid">Pagadas</option>
            <option value="pending">Pendientes</option>
            <option value="overdue">Vencidas</option>
            <option value="cancelled">Canceladas</option>
          </select>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
        <CardHeader>
          <CardTitle className="text-[#EAEAEA]">Historial de Facturas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1E90FF]/20">
                  <th className="text-left text-[#EAEAEA]/70 py-3">Factura #</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Cliente</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Monto</th>
                  <th className="text-left text-[#EAEAEA}/70 py-3">Estado</th>
                  <th className="text-left text-[#EAEAEA}/70 py-3">Fecha de Emisión</th>
                  <th className="text-left text-[#EAEAEA}/70 py-3">Fecha de Vencimiento</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={6} className="py-3 text-center text-[#EAEAEA]/70">Cargando facturas...</td>
                  </tr>
                )}
                {invoices.length === 0 && !loading && (
                  <tr>
                    <td colSpan={6} className="py-3 text-center text-[#EAEAEA]/70">No hay facturas registradas.</td>
                  </tr>
                )}
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-[#1E90FF]/10">
                    <td className="py-3 text-[#EAEAEA] font-medium">{invoice.invoice_number}</td>
                    <td className="py-3 text-[#EAEAEA]">{invoice.clients?.name || 'N/A'}</td>
                    <td className="py-3 text-[#EAEAEA] font-medium">${invoice.total?.toFixed(2)}</td>
                    <td className="py-3">
                      <Badge className={getStatusBadge(invoice.status)}>
                        {getStatusIcon(invoice.status)} {invoice.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-[#EAEAEA]/70">{new Date(invoice.issue_date).toLocaleDateString()}</td>
                    <td className="py-3 text-[#EAEAEA}/70">{new Date(invoice.due_date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingPage;
