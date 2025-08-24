import { supabase } from '../lib/supabase'
import { Database } from '../types/supabase'

type Tables = Database['public']['Tables']

export class DatabaseService {
  // Operaciones genéricas para cualquier tabla
  static async getAll<T extends keyof Tables>(
    table: T,
    userId: string
  ): Promise<Tables[T]['Row'][]> {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  static async getById<T extends keyof Tables>(
    table: T,
    id: string,
    userId: string
  ): Promise<Tables[T]['Row'] | null> {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('id', id)
      .eq('user_id', userId)
      .single()

    if (error) return null
    return data
  }

  static async create<T extends keyof Tables>(
    table: T,
    data: Omit<Tables[T]['Insert'], 'id' | 'created_at' | 'updated_at' | 'user_id'>,
    userId: string
  ): Promise<Tables[T]['Row']> {
    const { data: result, error } = await supabase
      .from(table)
      .insert({
        ...data,
        user_id: userId
      })
      .select()
      .single()

    if (error) throw error
    return result
  }

  static async update<T extends keyof Tables>(
    table: T,
    id: string,
    data: Partial<Tables[T]['Update']>,
    userId: string
  ): Promise<Tables[T]['Row']> {
    const { data: result, error } = await supabase
      .from(table)
      .update(data)
      .eq('id', id)
      .eq('user_id', userId)
      .select()
      .single()

    if (error) throw error
    return result
  }

  static async delete<T extends keyof Tables>(
    table: T,
    id: string,
    userId: string
  ): Promise<void> {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id)
      .eq('user_id', userId)

    if (error) throw error
  }

  // Métodos específicos para consultas complejas
  static async getClientWithContracts(clientId: string, userId: string) {
    const { data, error } = await supabase
      .from('clients')
      .select(`
        *,
        contracts (*,
          products (*)
        ),
        payments (*)
      `)
      .eq('id', clientId)
      .eq('user_id', userId)
      .single()

    if (error) throw error
    return data
  }

  static async getPendingPayments(userId: string) {
    const { data, error } = await supabase
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
    return data
  }

  static async searchClients(query: string, userId: string) {
    const { data, error } = await supabase
      .from('clients')
      .select(`
        *,
        contracts (*)
      `)
      .eq('user_id', userId)
      .or(`name.ilike.%${query}%,email.ilike.%${query}%,phone.ilike.%${query}%`)

    if (error) throw error
    return data
  }
}
