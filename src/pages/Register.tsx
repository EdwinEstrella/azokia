import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import RegisterForm from '../components/RegisterForm'

const Register: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0F2D] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Crear Cuenta</CardTitle>
          <CardDescription className="text-gray-400">
            Únete a Azokia y comienza a gestionar tu negocio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-[#1E90FF] hover:underline">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register
