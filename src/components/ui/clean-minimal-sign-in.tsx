"use client" 

import * as React from "react"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Lock, Mail } from "lucide-react"; // Removed LogIn
import { useAuth } from '../../contexts/AuthContext'; // Import useAuth

const SignIn2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState("");
  const { signIn } = useAuth(); // Use useAuth context
  const navigate = useNavigate(); // Use useNavigate

  const validateEmail = (email: string) => {
    return /^[^s@]+@[^s@]+.[^s@]+$/.test(email);
  };
 
  const handleSignIn = async () => { // Changed to async
    if (!email || !password) {
      setError("Por favor, ingresa tu correo y contraseña."); // Translated
      return;
    }
    if (!validateEmail(email)) {
      setError("Por favor, ingresa una dirección de correo válida."); // Translated
      return;
    }
    setError("");
    setLoading(true); // Set loading to true
    
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError("Error al iniciar sesión. Verifica tus credenciales."); // Translated and generic error
    } finally {
      setLoading(false); // Set loading to false
    }
  };
 
  return (
    <React.Fragment>
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0D0F2D] rounded-xl"> {/* Adjusted background color */}
      <div className="w-full max-w-sm bg-gradient-to-b from-[#0D0F2D] to-[#1A1C3A] rounded-3xl shadow-xl shadow-opacity-10 p-8 flex flex-col items-center border border-[#1E90FF]/20 text-[#EAEAEA]"> {/* Adjusted colors */}
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] mb-6 shadow-lg shadow-opacity-5"> {/* Adjusted colors */}
          <img src="/logo.png" alt="Azokia Logo" className="h-10 w-auto" /> {/* Replaced LogIn icon with logo */}
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-center text-[#EAEAEA]"> {/* Adjusted text color */}
          Iniciar sesión con correo
        </h2>
        <p className="text-[#EAEAEA]/70 text-sm mb-6 text-center"> {/* Adjusted text color */}
          Accede a tu panel de control para gestionar tu negocio.
        </p>
        <div className="w-full flex flex-col gap-3 mb-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#EAEAEA]/70"> {/* Adjusted text color */}
              <Mail className="w-4 h-4" />
            </span>
            <input
              placeholder="Correo electrónico" // Translated
              type="email"
              value={email}
              className="w-full pl-10 pr-3 py-2 rounded-xl border bg-[#1A1C3A] text-[#EAEAEA] text-sm" // Simplified colors
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#EAEAEA]/70"> {/* Adjusted text color */}
              <Lock className="w-4 h-4" />
            </span>
            <input
              placeholder="Contraseña" // Translated
              type="password"
              value={password}
              className="w-full pl-10 pr-10 py-2 rounded-xl border bg-[#1A1C3A] text-[#EAEAEA] text-sm" // Simplified colors
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#EAEAEA]/70 cursor-pointer text-xs select-none"></span> {/* Adjusted text color */}
          </div>
          <div className="w-full flex justify-end">
          {error && (
            <div className="text-sm text-[#ef4444] text-left">{error}</div> // Adjusted error color
          )}
            <button className="text-xs  hover:underline font-medium text-[#EAEAEA]/70"> {/* Adjusted text color */}
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </div>
        <button
          onClick={handleSignIn}
          className="w-full bg-gradient-to-b from-[#1E90FF] to-[#9B59B6] text-white font-medium py-2 rounded-xl shadow hover:from-[#1E90FF]/90 hover:to-[#9B59B6]/90 cursor-pointer transition mb-4 mt-2" // Adjusted colors
        >
          {loading ? 'Iniciando sesión...' : 'Acceder'} {/* Translated and loading text */}
        </button>
        {/* Removed social login section */}
      </div>
    </div>
    </React.Fragment>
  );
};
 
export { SignIn2 };