export interface User {
  id: number;
  nombre: string;
  email: string;
  password: string;
  id_rol: number;
  fecha_creacion: Date;
  ultimo_login?: Date;
}