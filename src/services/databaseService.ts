import { supabase } from '../lib/supabase';
import { Database } from '../types/supabase';

export type Tables = Database['public']['Tables'];
type Client = Tables['clients']['Row'];
type Contract = Tables['contracts']['Row'];
type Invoice = Tables['invoices']['Row'];
type Project = Tables['projects']['Row'];

// Define types for relations
type ClientWithRelations = Client & {
  contracts: Contract[];
  invoices: Invoice[];
};

type InvoiceWithRelations = Invoice & {
  clients: Client;
  contracts: Contract[];
};

type ClientSearch = Client & {
  contracts: Contract[];
};

export type ProjectWithClient = Project & {
  clients: { name: string } | null;
};

export type InvoiceWithClientAndItems = Invoice & {
  clients: { name: string } | null;
  invoice_items: { id: string; concept: string; description: string | null; quantity: number; unit_price: number; total_price: number }[];
};

export type ContractWithClient = Contract & {
  clients: Client | null;
  payment_terms: string | null;
  client_signature: string | null;
};

export class DatabaseService {
  // Operaciones genéricas para cualquier tabla
  static async getAll<T extends keyof Tables>(
    table: T,
    userId: string
  ): Promise<Tables[T]['Row'][]> {
    const { data, error } = await supabase
      .from(table as keyof Database['public']['Tables'])
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as unknown as Tables[T]['Row'] [];
  }

  static async getById<T extends keyof Tables>(
    table: T,
    id: string,
    userId: string
  ): Promise<Tables[T]['Row'] | null> {
    const { data, error } = await supabase
      .from(table as keyof Database['public']['Tables'])
      .select('*')
      .eq('id', id)
      .eq('user_id', userId)
      .single();

    if (error) return null;
    return data as unknown as Tables[T]['Row'] | null;
  }

  static async create<T extends keyof Tables>(
    table: T,
    data: Tables[T]['Insert'],
  ): Promise<Tables[T]['Row']> {
    const { data: result, error } = await supabase
      .from(table as keyof Database['public']['Tables'])
      .insert(data as any)
      .select()
      .single();

    if (error) throw error;
    return result as unknown as Tables[T]['Row'];
  }

  static async createInvoiceItem(data: Tables['invoice_items']['Insert']): Promise<Tables['invoice_items']['Row']> {
    const { data: result, error } = await supabase
      .from('invoice_items')
      .insert(data as any)
      .select()
      .single();

    if (error) throw error;
    return result as unknown as Tables['invoice_items']['Row'];
  }

  // static async update<T extends keyof Tables>(
  //   table: T,
  //   id: string,
  //   data: any,
  //   userId: string
  // ): Promise<Tables[T]['Row']> {
  //   const { data: result, error } = await supabase
  //     .from(table as keyof Database['public']['Tables'])
  //     .update(data)
  //     .eq('id', id)
  //     .eq('user_id', userId)
  //     .select()
  //     .single();

  //   if (error) throw error;
  //   return result as unknown as Tables[T]['Row']>;
  // }

  static async delete<T extends keyof Tables>(
    table: T,
    id: string,
    userId: string
  ): Promise<void> {
    const { error } = await supabase
      .from(table as keyof Database['public']['Tables'])
      .delete()
      .eq('id', id)
      .eq('user_id', userId);

    if (error) throw error;
  }

  // Métodos específicos para consultas complejas
  static async getClientWithContracts(clientId: string, userId: string): Promise<ClientWithRelations | null> {
    const { data, error } = await supabase
      .from('clients')
      .select(`
        *,
        contracts (*),
        invoices (*)
      `)
      .eq('id', clientId)
      .eq('user_id', userId)
      .single();

    if (error) throw error;
    return data as unknown as ClientWithRelations | null;
  }

  static async getPendingInvoices(userId: string): Promise<InvoiceWithRelations[]> {
    const { data, error } = await supabase
      .from('invoices')
      .select(`
        *,
        clients (*),
        contracts (*)
      `)
      .eq('user_id', userId)
      .eq('status', 'pending')
      .lte('due_date', new Date().toISOString())
      .order('due_date', { ascending: true });

    if (error) throw error;
    return data as unknown as InvoiceWithRelations[];
  }

  static async searchClients(query: string, userId: string): Promise<ClientSearch[]> {
    const { data, error } = await supabase
      .from('clients')
      .select(`
        *,
        contracts (*)
      `)
      .eq('user_id', userId)
      .or(`name.ilike.%${query}%,email.ilike.%${query}%,phone.ilike.%${query}%`);

    if (error) throw error;
    return data as unknown as ClientSearch[];
  }

  static async getProjectsWithClientNames(userId: string): Promise<ProjectWithClient[]> {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        clients (name)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as unknown as ProjectWithClient[];
  }

  static async getInvoicesWithClientAndItems(userId: string): Promise<InvoiceWithClientAndItems[]> {
    const { data, error } = await supabase
      .from('invoices')
      .select(`
        *,
        clients (name),
        invoice_items (*)
      `)
      .eq('user_id', userId)
      .order('issue_date', { ascending: false });

    if (error) throw error;
    return data as unknown as InvoiceWithClientAndItems[];
  }

  static async getContractsWithClientNames(userId: string): Promise<ContractWithClient[]> {
    const { data, error } = await supabase
      .from('contracts')
      .select(`
        *,
        clients (name)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as unknown as ContractWithClient[];
  }

  static async getContractWithClient(contractId: string, userId: string): Promise<ContractWithClient | null> {
    const { data, error } = await supabase
      .from('contracts')
      .select(`
        *,
        clients (*)
      `)
      .eq('id', contractId)
      .eq('user_id', userId)
      .single();

    if (error) {
        console.error('Error fetching contract with client:', error);
        return null;
    }
    return data as unknown as ContractWithClient | null;
  }
}
