import { DatabaseService } from '../database/database.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private databaseService;
    private configService;
    constructor(databaseService: DatabaseService, configService: ConfigService);
    register(userData: {
        nombre: string;
        email: string;
        password: string;
        id_rol: number;
    }): Promise<{
        message: string;
    }>;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
}
