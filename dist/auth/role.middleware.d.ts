import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class RoleMiddleware implements NestMiddleware {
    private readonly requiredRoles;
    constructor(requiredRoles: number[]);
    use(req: Request, res: Response, next: NextFunction): void;
}
