import { ConfigService } from '@nestjs/config';
export declare class DatabaseService {
    private configService;
    private pool;
    constructor(configService: ConfigService);
    query(sql: string, params?: any[]): Promise<any>;
    close(): Promise<void>;
}
