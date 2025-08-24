import React, { useState, useEffect } from 'react';
import { Plus, FileText, Calendar, DollarSign, Clock, AlertCircle, Users, Download } from 'lucide-react';
import { useSupabase } from '../../hooks/useSupabase';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { ContractForm } from '../../components/forms/ContractForm';

const Contracts: React.FC = () => {
  const [contracts, setContracts] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { getContracts, loading } = useSupabase('user-id');

  useEffect(() => {
    loadContracts();
  }, []);

  const loadContracts = async () => {
    const data = await getContracts();
    setContracts(data || []);
  };

  const handleContractCreated = () => {
    setIsDialogOpen(false);
    loadContracts();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-500/20';
      case 'COMPLETED': return 'text-blue-400 bg-blue-500/20';
      case 'CANCELLED': return 'text-red-400 bg-red-500/20';
      case 'SUSPENDED': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(amount);
  };

  const generateContractPDF = (contract: any) => {
    // Simular generación de PDF
    const pdfContent = `
      CONTRATO: ${contract.title}
      CLIENTE: ${contract.clients?.name}
      MONTO: ${formatCurrency(contract.amount)}
      FECHA INICIO: ${new Date(contract.start_date).toLocaleDateString()}
      FECHA FIN: ${contract.end_date ? new Date(contract.end_date).toLocaleDateString() : 'Indefinido'}
    `;
    
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contrato-${contract.title}.pdf`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Contratos</h1>
            <p className="text-[#EAEAEA]/60">Gestiona tus acuerdos y onboarding</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Contrato
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0D0F2D] border-[#1E90FF]/30 max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-[#EAEAEA]">Crear Nuevo Contrato</DialogTitle>
              </DialogHeader>
              <ContractForm onSuccess={handleContractCreated} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Total</p>
                <p className="text-2xl font-bold text-[#EAEAEA]">{contracts.length}</p>
              </div>
              <FileText className="h-8 w-8 text-[#1E90FF]" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Activos</p>
                <p className="text-2xl font-bold text-green-400">
                  {contracts.filter(c => c.status === 'ACTIVE').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-green-400" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Valor Mensual</p>
                <p className="text-2xl font-bold text-[#EAEAEA]">
                  {formatCurrency(contracts.reduce((sum, c) => sum + (c.status === 'ACTIVE' ? c.amount : 0), 0))}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-yellow-400" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Próximos a vencer</p>
                <p className="text-2xl font-bold text-red-400">
                  {contracts.filter(c => {
                    if (c.end_date && c.status === 'ACTIVE') {
                      const endDate = new Date(c.end_date);
                      const today = new Date();
                      const diffTime = endDate.getTime() - today.getTime();
                      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                      return diffDays <= 30;
                    }
                    return false;
                  }).length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-400" />
            </div>
          </Card>
        </div>

        {/* Contracts List */}
        <div className="grid grid-cols-1 gap-4">
          {contracts.map((contract) => (
            <BackgroundGradient
              key={contract.id}
              className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#EAEAEA] mb-2">
                    {contract.title}
                  </h3>
                  <p className="text-[#EAEAEA]/70 text-sm mb-3">
                    {contract.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center text-[#EAEAEA]/60">
                      <Calendar className="h-4 w-4 mr-1" />
                      Inicio: {new Date(contract.start_date).toLocaleDateString()}
                    </div>
                    {contract.end_date && (
                      <div className="flex items-center text-[#EAEAEA]/60">
                        <Calendar className="h-4 w-4 mr-1" />
                        Fin: {new Date(contract.end_date).toLocaleDateString()}
                      </div>
                    )}
                    <div className="flex items-center text-[#EAEAEA]/60">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {formatCurrency(contract.amount)} / {contract.payment_type}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                    {contract.status}
                  </span>
                  <div className="text-right">
                    <p className="text-[#EAEAEA]/60 text-sm">Cliente</p>
                    <p className="text-[#1E90FF] text-sm">{contract.clients?.name}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#1E90FF]/20">
                <div className="text-sm text-[#EAEAEA]/60">
                  Producto: {contract.products?.name}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-[#1E90FF]/30 text-[#EAEAEA]"
                    onClick={() => generateContractPDF(contract)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Descargar
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#1E90FF]/30 text-[#EAEAEA]">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {contracts.length === 0 && !loading && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-[#EAEAEA]/40 mx-auto mb-4" />
            <div className="text-[#EAEAEA]/40 mb-4">No hay contratos registrados</div>
            <Button 
              className="bg-[#1E90FF] hover:bg-[#1E90FF]/90"
              onClick={() => setIsDialogOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Crear primer contrato
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contracts;
