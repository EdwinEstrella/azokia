import { supabase } from '../lib/supabase'
import { Database } from '../types/supabase'

type Tables = Database['public']['Tables']
type Client = Tables['clients']['Row']
type Product = Tables['products']['Row']
type Contract = Tables['contracts']['Row']
type Payment = Tables['payments']['Row']

export interface CreateClientData {
  name: string
  email: string
  phone?: string
  address?: string
  status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED'
}

export interface CreateProductData {
  name: string
  description?: string
  price: number
  type?: 'SERVICE' | 'DIGITAL_PRODUCT' | 'PACKAGE'
}

export interface CreateContractData {
  title: string
  description?: string
  startDate: string
  endDate?: string
  paymentType: 'MONTHLY_30' | 'BIWEEKLY_15' | 'WEEKLY' | 'QUARTERLY' | 'ANNUAL'
  amount: number
  clientId: string
  productId: string
}

export interface CreatePaymentData {
  amount: number
  dueDate: string
  contractId: string
  clientId: string
}

export class SupabaseService {
  // Client Operations
  static async createClient(userId: string, data: CreateClientData): Promise<Client> {
    const { data: client, error } = await supabase
      .from('clients')
      .insert({
        ...data,
        user_id: userId,
        status: data.status || 'ACTIVE'
      })
      .select()
      .single()

    if (error) throw error
    return client
  }

  static async getClients(userId: string): Promise<Client[]> {
    const { data: clients, error } = await supabase
      .from('clients')
      .select(`
        *,
        contracts (
          *,
          products (*),
          payments (*)
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return clients
  }

  static async getClientById(userId: string, clientId: string): Promise<Client | null> {
    const { data: client, error } = await supabase
      .from('clients')
      .select(`
        *,
        contracts (
          *,
          products (*),
          payments (*)
        ),
        payments (*)
      `)
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

  // Product Operations
  static async createProduct(userId: string, data: CreateProductData): Promise<Product> {
    const { data: product, error } = await supabase
      .from('products')
      .insert({
        ...data,
        user_id: userId,
        type: data.type || 'SERVICE',
        is_active: true
      })
      .select()
      .single()

    if (error) throw error
    return product
  }

  static async getProducts(userId: string): Promise<Product[]> {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return products
  }

  static async updateProduct(userId: string, productId: string, data: Partial<CreateProductData>): Promise<Product> {
    const { data: product, error } = await supabase
      .from('products')
      .update(data)
      .eq('id', productId)
      .eq('user_id', userId)
      .select()
      .single()

    if (error) throw error
    return product
  }

  static async deleteProduct(userId: string, productId: string): Promise<void> {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', productId)
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
        status: 'ACTIVE',
        start_date: data.startDate,
        end_date: data.endDate,
        client_id: data.clientId,
        product_id: data.productId,
        payment_type: data.paymentType
      })
      .select(`
        *,
        clients (*),
        products (*)
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
        products (*),
        payments (*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return contracts
  }

  // Payment Operations
  static async createPayment(userId: string, data: CreatePaymentData): Promise<Payment> {
    const { data: payment, error } = await supabase
      .from('payments')
      .insert({
        ...data,
        user_id: userId,
        status: 'PENDING',
        due_date: data.dueDate,
        contract_id: data.contractId,
        client_id: data.clientId
      })
      .select(`
        *,
        clients (*),
        contracts (*)
      `)
      .single()

    if (error) throw error
    return payment
  }

  static async getPendingPayments(userId: string): Promise<Payment[]> {
    const { data: payments, error } = await supabase
      .from('payments')
      .select(`
        *,
        clients (*),
        contracts (*)
      `)
      .eq('user_id', userId)
      .eq('status', 'PENDING')
      .lte('due_date', new Date().toISOString())
      .order('due_date', { ascending: true })

    if (error) throw error
    return payments
  }

  // Search Operations
  static async searchClients(userId: string, query: string): Promise<Client[]> {
    const { data: clients, error } = await supabase
      .from('clients')
      .select(`
        *,
        contracts (
          *,
          products (*)
        )
      `)
      .eq('user_id', userId)
      .or(`name.ilike.%${query}%,email.ilike.%${query}%,phone.ilike.%${query}%`)

    if (error) throw error
    return clients
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
