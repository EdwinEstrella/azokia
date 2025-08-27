import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useDatabase } from '../../hooks/useDatabase';
import { ContractWithClient } from '../../services/databaseService';
import { Button } from '../../components/ui/button';
import { Loader2, Printer } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const ContractPreviewPage = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { getContractById, loading } = useDatabase(user?.id || '');
  const [contract, setContract] = useState<ContractWithClient | null>(null);

  useEffect(() => {
    if (id && user?.id) {
      const fetchContract = async () => {
        const fetchedContract = await getContractById(id);
        setContract(fetchedContract);
      };
      fetchContract();
    }
  }, [id, user?.id, getContractById]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  if (!contract) {
    return <div className="text-center py-10">Contrato no encontrado o no tienes permiso para verlo.</div>;
  }

  const { clients: client } = contract;

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 print:bg-white">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg print:shadow-none print:rounded-none">
        
        <header className="flex justify-between items-start pb-8 border-b print:border-none">
          <div>
            <img src="/logo.png" alt="Azokia Logo" className="h-12 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800">Azokia</h1>
            <p className="text-sm text-gray-500">Tu Socio en Soluciones Digitales</p>
            <p className="text-sm text-gray-500">[Tu Dirección, Ciudad, País]</p>
            <p className="text-sm text-gray-500">[Tu Email] | [Tu Teléfono] | [Tu Sitio Web]</p>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-bold uppercase text-gray-700">Contrato de Servicios</h2>
            <p className="text-sm text-gray-500 mt-2">Número de Contrato: <span className="font-semibold">{contract.contract_number}</span></p>
            <p className="text-sm text-gray-500">Fecha de Emisión: <span className="font-semibold">{contract.created_at ? format(new Date(contract.created_at), 'PPP', { locale: es }) : 'N/A'}</span></p>
          </div>
        </header>

        <section className="my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Partes Involucradas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-700">El Cliente</h4>
              <p>{client?.name}</p>
              <p>{client?.address}</p>
              <p>{client?.email}</p>
              <p>{client?.phone}</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-700">El Proveedor</h4>
              <p>Azokia</p>
              <p>[Tu Dirección, Ciudad, País]</p>
              <p>[Tu Email]</p>
              <p>[Tu Teléfono]</p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Detalles del Contrato</h3>
          <div className="space-y-4">
            <p><strong>Título:</strong> {contract.title}</p>
            <p><strong>Descripción del Servicio:</strong> {contract.description || 'No especificada'}</p>
            <p><strong>Fecha de Inicio:</strong> {contract.start_date ? format(new Date(contract.start_date), 'PPP', { locale: es }) : 'N/A'}</p>
            <p><strong>Fecha de Finalización:</strong> {contract.end_date ? format(new Date(contract.end_date), 'PPP', { locale: es }) : 'N/A'}</p>
            <p><strong>Valor Total:</strong> ${new Intl.NumberFormat('es-DO', { style: 'currency', currency: 'DOP' }).format(contract.amount || 0)}</p>
            <p><strong>Condiciones de Pago:</strong> {contract.payment_terms}</p>
          </div>
        </section>

        <section className="my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Términos y Condiciones</h3>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p>1. **Alcance del Servicio:** El Proveedor se compromete a realizar los servicios descritos anteriormente para El Cliente.</p>
            <p>2. **Pago:** El Cliente se compromete a pagar el Valor Total según las Condiciones de Pago acordadas.</p>
            <p>3. **Confidencialidad:** Ambas partes acuerdan mantener la confidencialidad de la información compartida durante el proyecto.</p>
            <p>4. **Propiedad Intelectual:** Una vez completado el pago final, la propiedad intelectual del trabajo realizado será transferida al Cliente, a excepción de las herramientas y código preexistente del Proveedor.</p>
            {/* Agrega más cláusulas según tus necesidades */}
          </div>
        </section>

        <section className="my-10 pt-10 border-t">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Firmas</h3>
          <div className="grid grid-cols-2 gap-16">
            <div className="border-t-2 pt-2 border-gray-400">
              <p className="font-bold">Firma del Cliente</p>
              <p className="mt-8 text-lg">{contract.client_signature || '__________________________'}</p>
              <p>{client?.name}</p>
            </div>
            <div className="border-t-2 pt-2 border-gray-400">
              <p className="font-bold">Firma del Proveedor</p>
              <p className="mt-8 text-lg">__________________________</p>
              <p>Representante de Azokia</p>
            </div>
          </div>
        </section>

      </div>

      <div className="max-w-4xl mx-auto mt-6 mb-12 flex justify-end print:hidden">
        <Button onClick={handlePrint}><Printer className="mr-2 h-4 w-4" /> Imprimir o Guardar como PDF</Button>
      </div>
    </div>
  );
};

export default ContractPreviewPage;
