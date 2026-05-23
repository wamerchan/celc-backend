import { ReportesService } from './reportes.service';
import { ReportFiltersDto } from './reportes.dto';
export declare class ReportesController {
    private readonly reportesService;
    constructor(reportesService: ReportesService);
    getLineasReport(query: ReportFiltersDto): Promise<any[]>;
    getEquiposReport(query: ReportFiltersDto): Promise<any[]>;
    getAsignacionesReport(query: ReportFiltersDto): Promise<any[]>;
}
