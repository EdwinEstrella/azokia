export interface Client {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  proyecto: string;
  estado: 'activo' | 'completado' | 'pendiente';
  ingreso: string;
}

export interface Project {
  id: string;
  cliente: string;
  proyecto: string;
  tipo: string;
  estado: 'diseño' | 'desarrollo' | 'revisión' | 'completado';
  progreso: number;
  plazo: string;
  presupuesto: string;
}

export interface Contract {
  id: string;
  cliente: string;
  tipo: string;
  valor: string;
  estado: 'pendiente' | 'firmado' | 'completado';
  inicio: string;
  fin: string;
}

export interface Invoice {
  id: string;
  numero: string;
  cliente: string;
  monto: string;
  estado: 'pendiente' | 'pagada' | 'vencida';
  fecha: string;
  vencimiento: string;
}
