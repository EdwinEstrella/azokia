import React, { useState, useEffect } from 'react';
import { Plus, FileText, Download, Send, CheckCircle, Clock, AlertCircle, DollarSign } from 'lucide-react';
import { useSupabase } from '../../hooks/useSupabase';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { InvoiceForm } from '../../components/forms/InvoiceForm';

const Invoices: React.FC = () => {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { getInvoices, loading } = useSupabase('user-id');

  useEffect(() => {
    loadInvoices();
  }, []);

  const loadInvoices = async () => {
    const data = await getInvoices();
    setInvoices(data || []);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(amount);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PAID': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'PENDING': return <Clock className="h-4 w-4 text-yellow-400" />;
      case 'OVERDUE': return <AlertCircle className="h-4 w-4 text-red-400" />;
      default: return <FileText className="h-4 w-4 text-gray-400" />;
    }
  };

  const generateInvoicePDF = (invoice: any) => {
    // Simular generación de PDF
    const pdfContent = `
      FACTURA: ${invoice.invoice_number}
      CLIENTE: ${invoice.clients?.name}
      MONTO: ${formatCurrency(invoice.amount)}
      FECHA EMISIÓN: ${new Date(invoice.issue_date).toLocaleDateString()}
      FECHA VENCIMIENTO: ${new Date(invoice.due_date).toLocaleDateString()}
      ESTADO: ${invoice.status}
    `;
    
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `factura-${invoice.invoice_number}.pdf`;
    a.click();
  };

  const handleInvoiceCreated = () => {
    setIsDialogOpen(false);
    loadInvoices();
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Facturas</h1>
            <p className="text-[#EAEAEA]/60">Emite facturas y gestiona pagos</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                <Plus className="h-4 w-4 mr-2" />
                Nueva Factura
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0D0F2D] border-[#1E90FF]/30 max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-[#EAEAEA]">Crear Nueva Factura</DialogTitle>
              </DialogHeader>
              <InvoiceForm onSuccess={handleInvoiceCreated} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Total</p>
                <p className="text-2xl font-bold text-[#EAEAEA]">{invoices.length}</p>
              </div>
              <FileText className="h-8 w-8 text-[#1E90FF]" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Por Cobrar</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {formatCurrency(invoices
                    .filter(i => i.status === 'PENDING')
                    .reduce((sum, i) => sum + i.amount, 0)
                  )}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-400" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Pagadas</p>
                <p className="text-2xl font-bold text-green-400">
                  {formatCurrency(invoices
                    .filter(i => i.status === 'PAID')
                    .reduce((sum, i) => sum + i.amount, 0)
                  )}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Vencidas</p>
                <p className="text-2xl font-bold text-red-400">
                  {formatCurrency(invoices
                    .filter(i => i.status === 'OVERDUE')
                    .reduce((sum, i) => sum + i.amount, 0)
                  )}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-400" />
            </div>
          </Card>
        </div>

        {/* Invoices List */}
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <BackgroundGradient
              key={invoice.id}
              className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[#EAEAEA]">
                      Factura #{invoice.invoice_number}
                    </h3>
                    {getStatusIcon(invoice.status)}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-[#EAEAEA]/60">Cliente</p>
                      <p className="text-[#EAEAEA]">{invoice.clients?.name}</p>
                    </div>
                    <div>
                      <p className="text-[#EAEAEA]/60">Fecha Emisión</p>
                      <p className="text-[#EAEAEA]">
                        {new Date(invoice.issue_date).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#EAEAEA]/60">Fecha Vencimiento</p>
                      <p className="text-[#EAEAEA]">
                        {new Date(invoice.due_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-[#EAEAEA]">
                    {formatCurrency(invoice.amount)}
                  </p>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    invoice.status === 'PAID' ? 'bg-green-500/20 text-green-400' :
                    invoice.status === 'PENDING' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {invoice.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#1E90FF]/20">
                <div className="text-sm text-[#EAEAEA]/60">
                  {invoice.items?.length || 0} conceptos
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-[#1E90FF]/30 text-[#EAEAEA]"
                    onClick={() => generateInvoicePDF(invoice)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Descargar
                  </Button>
                  {invoice.status === 'PENDING' && (
                    <Button size="sm" className="bg-green-500 hover:bg-green-600">
                      <Send className="h-4 w-4 mr-1" />
                      Enviar
                    </Button>
                  )}
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {invoices.length === 0 && !loading && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-[#EAEAEA]/40 mx-auto mb-4" />
            <div className="text-[#EAEAEA]/40 mb-4">No hay facturas registradas</div>
            <Button 
              className="bg-[#1E90FF] hover:bg-[#1E90FF]/90"
              onClick={() => setIsDialogOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Crear primera factura
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoices;
