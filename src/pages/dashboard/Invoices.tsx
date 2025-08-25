import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, FileText, Calendar, DollarSign, User, Download, Send, CheckCircle, Clock } from 'lucide-react';
import { useSupabase } from '../../hooks/useSupabase';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const Invoices: React.FC = () => {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const { getInvoices, searchInvoices, loading } = useSupabase('user-id');

  useEffect(() => {
    loadInvoices();
  }, []);

  const loadInvoices = async () => {
    const data = await getInvoices();
    setInvoices(data || []);
  };

  const handleSearch = async (query: string) => {
    setSearchTerm(query);
    if (query.trim()) {
      const results = await searchInvoices(query);
      setInvoices(results || []);
    } else {
      loadInvoices();
    }
  };

  const filteredInvoices = invoices.filter(invoice => 
    filterStatus === 'ALL' || invoice.status === filterStatus
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAID': return 'bg-green-500/20 text-green-400';
      case 'PENDING': return 'bg-yellow-500/20 text-yellow-400';
      case 'OVERDUE': return 'bg-red-500/20 text-red-400';
      case 'DRAFT': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PAID': return <CheckCircle className="h-4 w-4" />;
      case 'PENDING': return <Clock className="h-4 w-4" />;
      case 'OVERDUE': return <Clock className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Facturas</h1>
            <p className="text-[#EAEAEA]/60">Gestiona tus facturas y pagos</p>
          </div>
          <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Factura
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EAEAEA]/40 h-4 w-4" />
              <Input
                placeholder="Buscar facturas..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA]"
            >
              <option value="ALL">Todos los estados</option>
              <option value="PAID">Pagadas</option>
              <option value="PENDING">Pendientes</option>
              <option value="OVERDUE">Vencidas</option>
              <option value="DRAFT">Borradores</option>
            </select>
          </div>
        </Card>

        {/* Invoices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInvoices.map((invoice) => (
            <BackgroundGradient
              key={invoice.id}
              className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#EAEAEA]">Factura #{invoice.invoice_number}</h3>
                  <p className="text-[#1E90FF] text-sm">{invoice.client_name}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${getStatusColor(invoice.status)}`}>
                  {getStatusIcon(invoice.status)}
                  {invoice.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <DollarSign className="h-4 w-4" />
                  <span>${invoice.amount?.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(invoice.issue_date).toLocaleDateString()}</span>
                </div>
                {invoice.due_date && (
                  <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>Vence: {new Date(invoice.due_date).toLocaleDateString()}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-[#EAEAEA]/60">
                  {invoice.items?.length || 0} items
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
                    <Download className="h-4 w-4" />
                  </Button>
                  {invoice.status === 'PENDING' && (
                    <Button variant="ghost" size="sm" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
                      <Send className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {filteredInvoices.length === 0 && !loading && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-[#EAEAEA]/40 mx-auto mb-4" />
            <div className="text-[#EAEAEA]/40 mb-4">No hay facturas registradas</div>
            <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
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
