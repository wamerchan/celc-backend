export declare class CreateUsuarioDto {
    nombre: string;
    email: string;
    password: string;
    id_rol: number;
}
export declare class UpdateUsuarioDto {
    nombre?: string;
    email?: string;
    id_rol?: number;
}
export declare class UsuarioResponseDto {
    id: number;
    nombre: string;
    email: string;
    id_rol: number;
    fecha_creacion: Date;
    ultimo_login?: Date;
}
