export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          password: string
          name: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password: string
          name: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password?: string
          name?: string
          created_at?: string
          updated_at?: string
        }
      }
      clients: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          address: string | null
          status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED'
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          address?: string | null
          status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED'
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          address?: string | null
          status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED'
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          type: 'SERVICE' | 'DIGITAL_PRODUCT' | 'PACKAGE'
          is_active: boolean
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          type?: 'SERVICE' | 'DIGITAL_PRODUCT' | 'PACKAGE'
          is_active?: boolean
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          type?: 'SERVICE' | 'DIGITAL_PRODUCT' | 'PACKAGE'
          is_active?: boolean
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      contracts: {
        Row: {
          id: string
          title: string
          description: string | null
          start_date: string
          end_date: string | null
          status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'SUSPENDED'
          payment_type: 'MONTHLY_30' | 'BIWEEKLY_15' | 'WEEKLY' | 'QUARTERLY' | 'ANNUAL'
          amount: number
          client_id: string
          product_id: string
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          start_date: string
          end_date?: string | null
          status?: 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'SUSPENDED'
          payment_type: 'MONTHLY_30' | 'BIWEEKLY_15' | 'WEEKLY' | 'QUARTERLY' | 'ANNUAL'
          amount: number
          client_id: string
          product_id: string
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          start_date?: string
          end_date?: string | null
          status?: 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'SUSPENDED'
          payment_type?: 'MONTHLY_30' | 'BIWEEKLY_15' | 'WEEKLY' | 'QUARTERLY' | 'ANNUAL'
          amount?: number
          client_id?: string
          product_id?: string
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          amount: number
          status: 'PENDING' | 'PAID' | 'OVERDUE' | 'CANCELLED'
          due_date: string
          paid_date: string | null
          contract_id: string
          client_id: string
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          amount: number
          status?: 'PENDING' | 'PAID' | 'OVERDUE' | 'CANCELLED'
          due_date: string
          paid_date?: string | null
          contract_id: string
          client_id: string
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          amount?: number
          status?: 'PENDING' | 'PAID' | 'OVERDUE' | 'CANCELLED'
          due_date?: string
          paid_date?: string | null
          contract_id?: string
          client_id?: string
          user_id?: string
          created_at?: string
          updated_at?: string
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
      client_status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED'
      product_type: 'SERVICE' | 'DIGITAL_PRODUCT' | 'PACKAGE'
      contract_status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'SUSPENDED'
      payment_frequency: 'MONTHLY_30' | 'BIWEEKLY_15' | 'WEEKLY' | 'QUARTERLY' | 'ANNUAL'
      payment_status: 'PENDING' | 'PAID' | 'OVERDUE' | 'CANCELLED'
    }
  }
}
