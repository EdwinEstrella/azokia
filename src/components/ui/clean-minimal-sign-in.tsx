import * as React from "react"
import { useState, useEffect } from "react"
import { LogIn, Lock, Mail, AlertCircle } from "lucide-react"

interface CleanMinimalSignInProps {
  onSignIn?: (email: string, password: string) => Promise<void>
  errorMessage?: string
}

const CleanMinimalSignIn: React.FC<CleanMinimalSignInProps> = ({ 
  onSignIn, 
  errorMessage 
}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Mostrar errores externos
  useEffect(() => {
    if (errorMessage) {
      setError(errorMessage)
    }
  }, [errorMessage])

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSignIn = async () => {
    if (!email || !password) {
      setError("Por favor ingresa email y contraseña.")
      return
    }
    if (!validateEmail(email)) {
      setError("Por favor ingresa un email válido.")
      return
    }
    
    setError("")
    setLoading(true)

    try {
      if (onSignIn) {
        await onSignIn(email, password)
      } else {
        // Demo fallback
        await new Promise(resolve => setTimeout(resolve, 1000))
        alert("¡Inicio de sesión exitoso! (Demo)")
      }
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0D0F2D] rounded-xl z-1">
      <div className="w-full max-w-sm bg-gradient-to-b from-[#1E293B]/50 to-[#0D0F2D] rounded-3xl shadow-xl shadow-black/20 p-8 flex flex-col items-center border border-[#2F2F2F] text-white">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1E293B] mb-6 shadow-lg shadow-black/10">
          <LogIn className="w-7 h-7 text-[#1E90FF]" />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-center text-white">
          Iniciar sesión con email
        </h2>
        <p className="text-[#A3A3A3] text-sm mb-6 text-center">
          Accede a tu dashboard de Azokia para gestionar tu negocio
        </p>
        
        {/* Mostrar errores de validación de usuario */}
        {error && (
          <div className="w-full mb-4 p-3 bg-[#ef4444]/20 border border-[#ef4444] rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#ef4444]" />
            <span className="text-sm text-[#ef4444]">{error}</span>
          </div>
        )}

        <div className="w-full flex flex-col gap-3 mb-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A3A3A3]">
              <Mail className="w-4 h-4" />
            </span>
            <input
              placeholder="Email"
              type="email"
              value={email}
              className="w-full pl-10 pr-3 py-2 rounded-xl border border-[#2F2F2F] focus:outline-none focus:ring-2 focus:ring-[#1E90FF] bg-[#1E293B] text-white text-sm placeholder-[#A3A3A3]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A3A3A3]">
              <Lock className="w-4 h-4" />
            </span>
            <input
              placeholder="Contraseña"
              type="password"
              value={password}
              className="w-full pl-10 pr-10 py-2 rounded-xl border border-[#2F2F2F] focus:outline-none focus:ring-2 focus:ring-[#1E90FF] bg-[#1E293B] text-white text-sm placeholder-[#A3A3A3]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-end">
            <button className="text-xs text-[#1E90FF] hover:underline font-medium">
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </div>
        <button
          onClick={handleSignIn}
          disabled={loading}
          className="w-full bg-gradient-to-b from-[#1E90FF] to-[#0066CC] text-white font-medium py-2 rounded-xl shadow hover:brightness-105 cursor-pointer transition mb-4 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Iniciando sesión..." : "Comenzar"}
        </button>
        <div className="flex items-center w-full my-2">
          <div className="flex-grow border-t border-dashed border-[#2F2F2F]"></div>
          <span className="mx-2 text-xs text-[#A3A3A3]">O inicia sesión con</span>
          <div className="flex-grow border-t border-dashed border-[#2F2F2F]"></div>
        </div>
        <div className="flex gap-3 w-full justify-center mt-2">
          <button className="flex items-center justify-center w-12 h-12 rounded-xl border border-[#2F2F2F] bg-[#1E293B] hover:bg-[#2D3748] transition">
            <img
              src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Google"
              className="w-6 h-6 rounded"
            />
          </button>
          <button className="flex items-center justify-center w-12 h-12 rounded-xl border border-[#2F2F2F] bg-[#1E293B] hover:bg-[#2D3748] transition">
            <img
              src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Facebook"
              className="w-6 h-6 rounded"
            />
          </button>
          <button className="flex items-center justify-center w-12 h-12 rounded-xl border border-[#2F2F2F] bg-[#1E293B] hover:bg-[#2D3748] transition">
            <img
              src="https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Apple"
              className="w-6 h-6 rounded"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export { CleanMinimalSignIn }
