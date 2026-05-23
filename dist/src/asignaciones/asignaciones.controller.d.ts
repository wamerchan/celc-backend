import { AsignacionesService } from './asignaciones.service';
export declare class AsignacionesController {
    private readonly asignacionesService;
    constructor(asignacionesService: AsignacionesService);
    findAll(): Promise<({
        equipo: {
            id: number;
            descripcion: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            fechaAdquisicion: Date | null;
        } | null;
        linea: {
            id: number;
            descripcion: string | null;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
        } | null;
        usuario: {
            nombres: string;
            apellidos: string;
            cedula: string;
            fechaNacimiento: Date | null;
            correoElectronico: string;
            contrasenaHash: string;
            fechaCreacion: Date;
            ultimoLogin: Date | null;
            activo: boolean | null;
            id: number;
            rolId: number;
        };
    } & {
        id: number;
        usuarioId: number;
        equipoId: number | null;
        lineaId: number | null;
        fechaAsignacion: Date;
        fechaDesasignacion: Date | null;
        observaciones: string | null;
    })[]>;
    findById(id: string): Promise<({
        equipo: {
            id: number;
            descripcion: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            fechaAdquisicion: Date | null;
        } | null;
        linea: {
            id: number;
            descripcion: string | null;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
        } | null;
        usuario: {
            nombres: string;
            apellidos: string;
            cedula: string;
            fechaNacimiento: Date | null;
            correoElectronico: string;
            contrasenaHash: string;
            fechaCreacion: Date;
            ultimoLogin: Date | null;
            activo: boolean | null;
            id: number;
            rolId: number;
        };
    } & {
        id: number;
        usuarioId: number;
        equipoId: number | null;
        lineaId: number | null;
        fechaAsignacion: Date;
        fechaDesasignacion: Date | null;
        observaciones: string | null;
    }) | null>;
    create(body: any): Promise<{
        id: number;
    }>;
    update(id: string, body: any): Promise<({
        equipo: {
            id: number;
            descripcion: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            fechaAdquisicion: Date | null;
        } | null;
        linea: {
            id: number;
            descripcion: string | null;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
        } | null;
        usuario: {
            nombres: string;
            apellidos: string;
            cedula: string;
            fechaNacimiento: Date | null;
            correoElectronico: string;
            contrasenaHash: string;
            fechaCreacion: Date;
            ultimoLogin: Date | null;
            activo: boolean | null;
            id: number;
            rolId: number;
        };
    } & {
        id: number;
        usuarioId: number;
        equipoId: number | null;
        lineaId: number | null;
        fechaAsignacion: Date;
        fechaDesasignacion: Date | null;
        observaciones: string | null;
    }) | null>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
