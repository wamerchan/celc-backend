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
        activeLines: {
            total: number;
            label: string;
        };
        equipmentsInRepair: {
            total: number;
            label: string;
        };
        upcomingReviews: {
            total: number;
            label: string;
        };
    }>;
}
