import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Importar y ejecutar el script de creación de usuario admin
import { createAdminUser } from './scripts/createAdminUser.ts'

// Crear usuario admin al iniciar la aplicación (solo en desarrollo)
if (import.meta.env.DEV) {
  createAdminUser().catch(console.error)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
