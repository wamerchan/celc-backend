export declare enum LineasEstado {
    Activa = "Activa",
    Inactiva = "Inactiva",
    Suspendida = "Suspendida"
}
export declare class CreateLineaDto {
    numeroTelefono: string;
    operador: string;
    planDatos?: string | null;
    estado?: LineasEstado;
    fechaActivacion?: Date | null;
    fechaVencimientoPlan?: Date | null;
    descripcion?: string | null;
}
export declare class UpdateLineaDto {
    numeroTelefono?: string;
    operador?: string;
    planDatos?: string | null;
    estado?: LineasEstado;
    fechaActivacion?: Date | null;
    fechaVencimientoPlan?: Date | null;
    descripcion?: string | null;
}
export declare class LineaResponseDto {
    id: number;
    numeroTelefono: string;
    operador: string;
    planDatos?: string | null;
    estado?: string | null;
    fechaActivacion?: Date | null;
    fechaVencimientoPlan?: Date | null;
    descripcion?: string | null;
}
