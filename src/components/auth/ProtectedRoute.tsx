import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Loader2 } from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth()
  const [userExists, setUserExists] = useState<boolean | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const checkUserRegistration = async () => {
      if (user && userExists === null) {
        try {
          const { data, error } = await supabase
            .from('users')
            .select('id')
            .eq('id', user.id)
            .single()

          if (error || !data) {
            setUserExists(false)
            navigate('/complete-registration')
          } else {
            setUserExists(true)
          }
        } catch {
          setUserExists(false)
          navigate('/complete-registration')
        }
      }
    }

    checkUserRegistration()
  }, [user, userExists, navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D0F2D] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-[#1E90FF] animate-spin mx-auto mb-4" />
          <p className="text-[#EAEAEA]">Verificando autenticación...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (userExists === false) {
    return (
      <div className="min-h-screen bg-[#0D0F2D] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-[#1E90FF] animate-spin mx-auto mb-4" />
          <p className="text-[#EAEAEA]">Redirigiendo para completar registro...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default ProtectedRoute
