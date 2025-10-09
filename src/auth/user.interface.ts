export interface User {
  id_usuario: number;
  nombres: string;
  apellidos: string;
  cedula: string;
  fecha_nacimiento?: Date;
  correo_electronico: string;
  contrasena_hash: string;
  id_rol: number;
  fecha_creacion: Date;
  ultimo_login?: Date;
  activo?: boolean;
}