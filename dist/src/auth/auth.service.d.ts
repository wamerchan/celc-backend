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
        cedula?: string;
    }): Promise<{
        message: string;
    }>;
    login(email: string, password: string): Promise<{
        token: any;
        user: {
            id: number;
            nombres: string;
            apellidos: string;
            email: string;
            rol: string;
            rolId: number;
        };
    }>;
    getProfile(userId: number): Promise<{
        id: number;
        nombres: string;
        apellidos: string;
        email: string;
        rol: string;
        rolId: number;
    }>;
    private buildUserProfile;
}
