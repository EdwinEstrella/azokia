import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { User } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Obtener sesión actual
    const getSession = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          setError(sessionError.message)
          return
        }

        setUser(session?.user ?? null)
        
        // Verificar si el usuario existe en la tabla users
        if (session?.user) {
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single()

          if (userError || !userData) {
            console.warn('Usuario autenticado pero no registrado en la base de datos')
            // No cerramos sesión aquí, permitimos que el usuario complete el registro
          }
        }
      } catch (err) {
        setError('Error al obtener la sesión')
        console.error('Error getting session:', err)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
        
        if (event === 'SIGNED_IN' && session?.user) {
          // Verificar si el usuario existe en la tabla users después de iniciar sesión
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single()

          if (userError || !userData) {
            console.warn('Usuario autenticado pero no registrado - redirigiendo a completar registro')
            navigate('/complete-registration')
          }
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [navigate])

  const signUp = async (email: string, password: string, name: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }
        }
      })

      if (authError) throw authError

      // Crear registro en la tabla users
      if (data.user) {
        const { error: userError } = await supabase
          .from('users')
          .insert({
            id: data.user.id,
            email: data.user.email!,
            name: name
          })

        if (userError) {
          console.error('Error creating user record:', userError)
          // No lanzamos error aquí para no interrumpir el flujo de autenticación
        }
      }

      return data
    } catch (err: any) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (authError) {
        if (authError.message.includes('Invalid login credentials')) {
          throw new Error('Credenciales inválidas. Verifica tu email y contraseña.')
        }
        throw authError
      }

      // Verificar si el usuario existe en la tabla users
      if (data.user) {
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('id', data.user.id)
          .single()

        if (userError || !userData) {
          console.warn('Usuario autenticado pero no registrado en la base de datos')
          // No lanzamos error, permitimos que el usuario complete el registro
        }
      }

      return data
    } catch (err: any) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      setUser(null)
    } catch (err: any) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const checkUserExists = async (userId: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id')
        .eq('id', userId)
        .single()

      return !error && !!data
    } catch {
      return false
    }
  }

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    checkUserExists
  }
}
