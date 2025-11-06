import { MetricasService } from './metricas.service';
export declare class MetricasController {
    private readonly metricasService;
    constructor(metricasService: MetricasService);
    getTotalActiveLines(): Promise<any>;
    getEquipmentsInRepair(): Promise<any>;
    getUpcomingReviews(): Promise<any>;
    getDashboardStats(): Promise<any>;
}
