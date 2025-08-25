import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { CleanMinimalSignIn } from '../components/ui/clean-minimal-sign-in'

const Login: React.FC = () => {
  const { signIn, error: authError } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Mostrar errores de la ruta protegida
  useEffect(() => {
    if (location.state?.error) {
      console.log('Error de navegación:', location.state.error)
    }
  }, [location.state])

  const handleSignIn = async (email: string, password: string) => {
    try {
      await signIn(email, password)
      navigate('/dashboard')
    } catch (error: any) {
      // El error ya está manejado en el hook useAuth
      console.error('Error en login:', error.message)
    }
  }

  return (
    <CleanMinimalSignIn 
      onSignIn={handleSignIn}
      errorMessage={authError || location.state?.error}
    />
  )
}

export default Login
