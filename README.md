# Azokia - Agencia de Desarrollo Web
Sistema integral que combina sitio web corporativo y herramientas internas de gestión para agencias de desarrollo digital.

## Arquitectura del Sistema

### Sitio Web Corporativo (Público)
Escaparate digital para atraer y convertir clientes potenciales:

- **Home**: Página principal con propuesta de valor y servicios destacados
- **Servicios**: Catálogo completo de servicios de desarrollo web ofrecidos
- **Nosotros**: Historia de la agencia, equipo y experiencia
- **Contactar**: Formulario de contacto para solicitudes de proyectos

### Panel de Gestión Interno (Privado)
Herramientas exclusivas para el equipo de Azokia:

- **Login**: Acceso seguro solo para personal autorizado de la agencia
- **Dashboard**: Panel de control para la gestión operativa interna

## Funcionalidades del Dashboard Interno

### 1. Panel Principal
- **Métricas del Negocio**: KPIs y estadísticas de rendimiento
  - Ingresos generados y tendencias mensuales
  - Proyectos en desarrollo y completados
  - Base de clientes activos
  - Sitios web en producción y mantenimiento

### 2. Gestión de Clientes
- Directorio completo de clientes contratantes
- Historial de proyectos desarrollados por cliente
- Datos de contacto y comunicaciones
- Seguimiento de relaciones comerciales

### 3. Gestión de Contratos
- Creación y administración de propuestas comerciales
- Biblioteca de plantillas de contratos
- Control de estados: pendiente, firmado, en ejecución
- Calendario de fechas clave y vencimientos

### 4. Gestión de Proyectos
- Seguimiento de desarrollos en curso
- Asignación de desarrolladores y recursos
- Control de tiempos y cumplimiento de hitos
- Estados de avance y entregables

### 5. Facturación
- Emisión de facturas a clientes
- Control de cobranzas y pagos pendientes
- Historial de transacciones
- Reportes de ingresos por período

### 6. Finanzas
- Dashboard de salud financiera de la agencia
- Análisis de rentabilidad por proyecto/cliente
- Proyecciones de ingresos y gastos
- Control de costos operativos

### 7. Automatización
- Workflows automatizados para procesos repetitivos
- Sistema de notificaciones programadas
- Integraciones con herramientas de desarrollo
- Plantillas de procesos estandarizados

### 8. Configuración
- Personalización del sistema interno
- Gestión de usuarios del equipo y permisos
- Configuración de datos de la empresa
- Preferencias operativas del sistema

## Flujo de Trabajo

```
Cliente Potencial → Sitio Web Público → Solicita Servicio
        ↓
Equipo Azokia → Dashboard Interno → Gestiona Proyecto → Entrega Final
```

## Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Estilos**: Tailwind CSS
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth
- **Iconografía**: Lucide React
- **Enrutamiento**: React Router

## Características Técnicas

- **Responsive Design**: Adaptable a todos los dispositivos
- **UI/UX Moderna**: Interfaz contemporánea y profesional
- **Navegación Dual**: Sitio público + panel administrativo privado
- **Arquitectura Modular**: Componentes reutilizables y escalables
- **Autenticación Robusta**: Acceso seguro al panel interno
- **Base de Datos en Tiempo Real**: Sincronización automática
- **Panel de Control Completo**: Gestión integral del negocio

## Instalación y Configuración

```bash
# Clonar repositorio
git clone [repository-url]

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con credenciales de Supabase

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/           # Componentes base
│   ├── layout/       # Header, Footer, Sidebar
│   ├── forms/        # Formularios
│   └── charts/       # Gráficos
├── pages/
│   ├── public/       # Home, Servicios, Nosotros, Contacto
│   ├── auth/         # Login
│   └── dashboard/    # Todas las páginas del dashboard
├── contexts/         # AuthContext, DataContext
├── hooks/           # Custom hooks
├── utils/           # Helpers y constants
└── types/           # TypeScript interfaces
```

## Panel de Control - Funcionalidades Avanzadas

### Métricas en Tiempo Real
- Dashboard con KPIs actualizados automáticamente
- Gráficos de rendimiento y tendencias
- Alertas de actividad crítica
- Resumen de acciones pendientes

### Gestión Operativa Completa
- CRUD completo para todas las entidades de negocio
- Sistema de búsqueda y filtrado avanzado
- Exportación de reportes y datos
- Centro de notificaciones internas

### Seguridad Empresarial
- Autenticación multi-factor para el equipo
- Sistema de roles y permisos granulares
- Políticas de seguridad a nivel de base de datos
- Encriptación de información sensible de clientes

## Casos de Uso

**Para Clientes Potenciales:**
- Explorar servicios de desarrollo web
- Conocer el equipo y experiencia de Azokia
- Solicitar cotizaciones y consultas

**Para el Equipo de Azokia:**
- Gestionar cartera de clientes y proyectos
- Controlar tiempos y recursos de desarrollo
- Administrar finanzas y facturación
- Automatizar procesos repetitivos

## Soporte y Desarrollo

Este sistema está diseñado específicamente para optimizar la operación interna de Azokia mientras mantiene una presencia profesional hacia el mercado.

Para modificaciones o consultas técnicas sobre el sistema, contactar al equipo de desarrollo interno.
