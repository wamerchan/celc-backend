import { DatabaseService } from '../database/database.service';
export declare class MetricasService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    getTotalActiveLines(): Promise<{
        total: any;
        label: string;
    }>;
    getEquipmentsInRepair(): Promise<{
        total: any;
        label: string;
    }>;
    getUpcomingReviews(): Promise<{
        total: any;
        label: string;
    }>;
    getDashboardStats(): Promise<{
        activeLines: {
            total: any;
            label: string;
        };
        equipmentsInRepair: {
            total: any;
            label: string;
        };
        upcomingReviews: {
            total: any;
            label: string;
        };
    }>;
}
