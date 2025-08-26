import { supabase } from '../lib/supabase'
import { Database } from '../types/supabase'

type Tables = Database['public']['Tables']
type Client = Tables['clients']['Row']
type Project = Tables['projects']['Row']
type Contract = Tables['contracts']['Row']
type Invoice = Tables['invoices']['Row']
type InvoiceItem = Tables['invoice_items']['Row']

export interface CreateClientData {
  name: string
  email: string
  phone?: string
  company?: string
  address?: string
  status?: 'active' | 'inactive' | 'prospect'
  notes?: string
}

export interface CreateProjectData {
  client_id: string
  name: string
  description?: string
  type: 'corporate' | 'ecommerce' | 'application' | 'maintenance'
  status?: 'pending' | 'development' | 'testing' | 'completed' | 'cancelled'
  start_date?: string
  estimated_end_date?: string
  budget?: number
  estimated_hours?: number
  repository_url?: string
  production_url?: string
}

export interface CreateContractData {
  client_id: string
  project_id?: string
  contract_number: string
  title: string
  description?: string
  amount: number
  signed_date?: string
  start_date?: string
  end_date?: string
  status?: 'draft' | 'sent' | 'signed' | 'completed' | 'cancelled'
  terms?: string
  file_url?: string
}

export interface CreateInvoiceData {
  client_id: string
  project_id?: string
  invoice_number: string
  issue_date: string
  due_date: string
  subtotal: number
  taxes?: number
  total: number
  status?: 'pending' | 'paid' | 'overdue' | 'cancelled'
  payment_method?: string
  notes?: string
  file_url?: string
}

export interface CreateInvoiceItemData {
  invoice_id: string
  concept: string
  description?: string
  quantity: number
  unit_price: number
  subtotal: number
}

export class SupabaseService {
  // Client Operations
  static async createClient(userId: string, data: CreateClientData): Promise<Client> {
    const { data: client, error } = await supabase
      .from('clients')
      .insert({
        ...data,
        user_id: userId,
        status: data.status || 'active'
      })
      .select()
      .single()

    if (error) throw error
    return client
  }

  static async getClients(userId: string): Promise<Client[]> {
    const { data: clients, error } = await supabase
      .from('clients')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return clients
  }

  static async getClientById(userId: string, clientId: string): Promise<Client | null> {
    const { data: client, error } = await supabase
      .from('clients')
      .select('*')
      .eq('id', clientId)
      .eq('user_id', userId)
      .single()

    if (error) return null
    return client
  }

  static async updateClient(userId: string, clientId: string, data: Partial<CreateClientData>): Promise<Client> {
    const { data: client, error } = await supabase
      .from('clients')
      .update(data)
      .eq('id', clientId)
      .eq('user_id', userId)
      .select()
      .single()

    if (error) throw error
    return client
  }

  static async deleteClient(userId: string, clientId: string): Promise<void> {
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', clientId)
      .eq('user_id', userId)

    if (error) throw error
  }

  // Project Operations
  static async createProject(userId: string, data: CreateProjectData): Promise<Project> {
    const { data: project, error } = await supabase
      .from('projects')
      .insert({
        ...data,
        user_id: userId,
        status: data.status || 'pending',
        worked_hours: 0
      })
      .select()
      .single()

    if (error) throw error
    return project
  }

  static async getProjects(userId: string): Promise<Project[]> {
    const { data: projects, error } = await supabase
      .from('projects')
      .select(`
        *,
        clients (*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return projects
  }

  static async updateProject(userId: string, projectId: string, data: Partial<CreateProjectData>): Promise<Project> {
    const { data: project, error } = await supabase
      .from('projects')
      .update(data)
      .eq('id', projectId)
      .eq('user_id', userId)
      .select()
      .single()

    if (error) throw error
    return project
  }

  static async deleteProject(userId: string, projectId: string): Promise<void> {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', projectId)
      .eq('user_id', userId)

    if (error) throw error
  }

  // Contract Operations
  static async createContract(userId: string, data: CreateContractData): Promise<Contract> {
    const { data: contract, error } = await supabase
      .from('contracts')
      .insert({
        ...data,
        user_id: userId,
        status: data.status || 'draft'
      })
      .select(`
        *,
        clients (*),
        projects (*)
      `)
      .single()

    if (error) throw error
    return contract
  }

  static async getContracts(userId: string): Promise<Contract[]> {
    const { data: contracts, error } = await supabase
      .from('contracts')
      .select(`
        *,
        clients (*),
        projects (*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return contracts
  }

  // Invoice Operations
  static async createInvoice(userId: string, data: CreateInvoiceData): Promise<Invoice> {
    const { data: invoice, error } = await supabase
      .from('invoices')
      .insert({
        ...data,
        user_id: userId,
        status: data.status || 'pending',
        taxes: data.taxes || 0
      })
      .select(`
        *,
        clients (*),
        projects (*)
      `)
      .single()

    if (error) throw error
    return invoice
  }

  static async getInvoices(userId: string): Promise<Invoice[]> {
    const { data: invoices, error } = await supabase
      .from('invoices')
      .select(`
        *,
        clients (*),
        projects (*),
        invoice_items (*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return invoices
  }

  // Invoice Items Operations
  static async createInvoiceItem(data: CreateInvoiceItemData): Promise<InvoiceItem> {
    const { data: item, error } = await supabase
      .from('invoice_items')
      .insert(data)
      .select()
      .single()

    if (error) throw error
    return item
  }

  // Dashboard Statistics
  static async getDashboardStats(userId: string) {
    const [
      clientsCount,
      projectsCount,
      contractsCount,
      invoicesCount,
      activeProjects,
      pendingInvoices
    ] = await Promise.all([
      supabase.from('clients').select('id', { count: 'exact' }).eq('user_id', userId),
      supabase.from('projects').select('id', { count: 'exact' }).eq('user_id', userId),
      supabase.from('contracts').select('id', { count: 'exact' }).eq('user_id', userId),
      supabase.from('invoices').select('id', { count: 'exact' }).eq('user_id', userId),
      supabase.from('projects').select('id', { count: 'exact' }).eq('user_id', userId).eq('status', 'development'),
      supabase.from('invoices').select('id', { count: 'exact' }).eq('user_id', userId).eq('status', 'pending')
    ])

    return {
      totalClients: clientsCount.count || 0,
      totalProjects: projectsCount.count || 0,
      totalContracts: contractsCount.count || 0,
      totalInvoices: invoicesCount.count || 0,
      activeProjects: activeProjects.count || 0,
      pendingInvoices: pendingInvoices.count || 0
    }
  }

  // Auth Operations
  static async signUp(email: string, password: string, name: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }
      }
    })

    if (error) throw error
    return data
  }

  static async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error
    return data
  }

  static async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  static async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  }
}
