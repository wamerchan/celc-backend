import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class RoleGuard implements CanActivate {
    private readonly requiredRoles;
    constructor(requiredRoles: number[]);
    canActivate(context: ExecutionContext): boolean;
}
