export declare class CreateLineaDto {
    nombre: string;
    descripcion: string;
    ubicacion: string;
}
export declare class UpdateLineaDto {
    nombre?: string;
    descripcion?: string;
    ubicacion?: string;
    estado?: number;
}
export declare class LineaResponseDto {
    id: number;
    nombre: string;
    descripcion: string;
    ubicacion: string;
    estado: number;
    fecha_creacion: Date;
}
