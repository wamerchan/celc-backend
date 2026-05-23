import { AsignacionesService } from './asignaciones.service';
export declare class AsignacionesController {
    private readonly asignacionesService;
    constructor(asignacionesService: AsignacionesService);
    findAll(): Promise<({
        usuario: {
            id: number;
            nombres: string;
            apellidos: string;
            cedula: string;
            fechaNacimiento: Date | null;
            correoElectronico: string;
            contrasenaHash: string;
            rolId: number;
            fechaCreacion: Date;
            ultimoLogin: Date | null;
            activo: boolean | null;
        };
        equipo: {
            id: number;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            fechaAdquisicion: Date | null;
            descripcion: string | null;
        } | null;
        linea: {
            id: number;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            descripcion: string | null;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
        } | null;
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
        usuario: {
            id: number;
            nombres: string;
            apellidos: string;
            cedula: string;
            fechaNacimiento: Date | null;
            correoElectronico: string;
            contrasenaHash: string;
            rolId: number;
            fechaCreacion: Date;
            ultimoLogin: Date | null;
            activo: boolean | null;
        };
        equipo: {
            id: number;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            fechaAdquisicion: Date | null;
            descripcion: string | null;
        } | null;
        linea: {
            id: number;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            descripcion: string | null;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
        } | null;
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
        usuario: {
            id: number;
            nombres: string;
            apellidos: string;
            cedula: string;
            fechaNacimiento: Date | null;
            correoElectronico: string;
            contrasenaHash: string;
            rolId: number;
            fechaCreacion: Date;
            ultimoLogin: Date | null;
            activo: boolean | null;
        };
        equipo: {
            id: number;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            fechaAdquisicion: Date | null;
            descripcion: string | null;
        } | null;
        linea: {
            id: number;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            descripcion: string | null;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
        } | null;
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
