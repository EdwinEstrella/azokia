export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string
          user_id: string
          name: string
          email: string
          phone: string | null
          company: string | null
          address: string | null
          status: 'active' | 'inactive' | 'prospect'
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          address?: string | null
          status?: 'active' | 'inactive' | 'prospect'
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          address?: string | null
          status?: 'active' | 'inactive' | 'prospect'
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          user_id: string
          client_id: string
          name: string
          description: string | null
          type: 'corporate' | 'ecommerce' | 'application' | 'maintenance'
          status: 'pending' | 'development' | 'testing' | 'completed' | 'cancelled'
          start_date: string | null
          estimated_end_date: string | null
          actual_end_date: string | null
          budget: number | null
          estimated_hours: number | null
          worked_hours: number
          repository_url: string | null
          production_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          client_id: string
          name: string
          description?: string | null
          type: 'corporate' | 'ecommerce' | 'application' | 'maintenance'
          status?: 'pending' | 'development' | 'testing' | 'completed' | 'cancelled'
          start_date?: string | null
          estimated_end_date?: string | null
          actual_end_date?: string | null
          budget?: number | null
          estimated_hours?: number | null
          worked_hours?: number
          repository_url?: string | null
          production_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          client_id?: string
          name?: string
          description?: string | null
          type?: 'corporate' | 'ecommerce' | 'application' | 'maintenance'
          status?: 'pending' | 'development' | 'testing' | 'completed' | 'cancelled'
          start_date?: string | null
          estimated_end_date?: string | null
          actual_end_date?: string | null
          budget?: number | null
          estimated_hours?: number | null
          worked_hours?: number
          repository_url?: string | null
          production_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      contracts: {
        Row: {
          id: string
          user_id: string
          client_id: string
          project_id: string | null
          contract_number: string
          title: string
          description: string | null
          amount: number
          signed_date: string | null
          start_date: string | null
          end_date: string | null
          status: 'draft' | 'sent' | 'signed' | 'completed' | 'cancelled'
          terms: string | null
          file_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          client_id: string
          project_id?: string | null
          contract_number: string
          title: string
          description?: string | null
          amount: number
          signed_date?: string | null
          start_date?: string | null
          end_date?: string | null
          status?: 'draft' | 'sent' | 'signed' | 'completed' | 'cancelled'
          terms?: string | null
          file_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          client_id?: string
          project_id?: string | null
          contract_number?: string
          title?: string
          description?: string | null
          amount?: number
          signed_date?: string | null
          start_date?: string | null
          end_date?: string | null
          status?: 'draft' | 'sent' | 'signed' | 'completed' | 'cancelled'
          terms?: string | null
          file_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      invoices: {
        Row: {
          id: string
          user_id: string
          client_id: string
          project_id: string | null
          invoice_number: string
          issue_date: string
          due_date: string
          subtotal: number
          taxes: number
          total: number
          status: 'pending' | 'paid' | 'overdue' | 'cancelled'
          payment_date: string | null
          payment_method: string | null
          notes: string | null
          file_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          client_id: string
          project_id?: string | null
          invoice_number: string
          issue_date: string
          due_date: string
          subtotal: number
          taxes?: number
          total: number
          status?: 'pending' | 'paid' | 'overdue' | 'cancelled'
          payment_date?: string | null
          payment_method?: string | null
          notes?: string | null
          file_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          client_id?: string
          project_id?: string | null
          invoice_number?: string
          issue_date?: string
          due_date?: string
          subtotal?: number
          taxes?: number
          total?: number
          status?: 'pending' | 'paid' | 'overdue' | 'cancelled'
          payment_date?: string | null
          payment_method?: string | null
          notes?: string | null
          file_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      invoice_items: {
        Row: {
          id: string
          invoice_id: string
          concept: string
          description: string | null
          quantity: number
          unit_price: number
          subtotal: number
          created_at: string
        }
        Insert: {
          id?: string
          invoice_id: string
          concept: string
          description?: string | null
          quantity?: number
          unit_price: number
          subtotal: number
          created_at?: string
        }
        Update: {
          id?: string
          invoice_id?: string
          concept?: string
          description?: string | null
          quantity?: number
          unit_price?: number
          subtotal?: number
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
