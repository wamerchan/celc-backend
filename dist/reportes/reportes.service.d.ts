import { DatabaseService } from '../database/database.service';
export declare class ReportesService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    getLineasReport(filters: any): Promise<any>;
    getEquiposReport(filters: any): Promise<any>;
    getAsignacionesReport(filters: any): Promise<any>;
}
