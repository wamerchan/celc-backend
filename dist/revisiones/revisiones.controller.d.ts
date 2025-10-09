import { RevisionesService } from './revisiones.service';
export declare class RevisionesController {
    private readonly revisionesService;
    constructor(revisionesService: RevisionesService);
    findAll(): Promise<any>;
    findById(id: string): Promise<any>;
    create(body: any): Promise<{
        id: any;
    }>;
    update(id: string, body: any): Promise<any>;
}
