import { DatabaseService } from '../database/database.service';
export declare class MetricasService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    getTotalActiveLines(): Promise<{
        total: number;
        label: string;
    }>;
    getEquipmentsInRepair(): Promise<{
        total: number;
        label: string;
    }>;
    getUpcomingReviews(): Promise<{
        total: number;
        label: string;
    }>;
    getDashboardStats(): Promise<{
        totalEquipos: number;
        equiposDisponibles: number;
        equiposAsignados: number;
        equiposEnMantenimiento: number;
        totalLineas: number;
        lineasActivas: number;
        totalAsignaciones: number;
        revisionesProximas: number;
        equiposPorEstado: {
            estado: string;
            count: number;
        }[];
        lineasPorOperador: {
            operador: string;
            count: number;
        }[];
        revisionesPorMes: {
            mes: string;
            count: number;
        }[];
        topMarcas: {
            marca: string;
            count: number;
        }[];
    }>;
}
