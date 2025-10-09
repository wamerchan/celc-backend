"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const database_service_1 = require("../database/database.service");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    databaseService;
    configService;
    constructor(databaseService, configService) {
        this.databaseService = databaseService;
        this.configService = configService;
    }
    async register(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const sql = 'INSERT INTO Usuarios (nombres, apellidos, correo_electronico, contrasena_hash, id_rol, fecha_creacion) VALUES (?, ?, ?, ?, ?, NOW())';
        await this.databaseService.query(sql, [
            userData.nombre,
            '',
            userData.email,
            hashedPassword,
            userData.id_rol,
        ]);
        return { message: 'Usuario registrado exitosamente' };
    }
    async login(email, password) {
        const sql = 'SELECT * FROM Usuarios WHERE correo_electronico = ?';
        const users = await this.databaseService.query(sql, [email]);
        if (users.length === 0) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const user = users[0];
        const isPasswordValid = await bcrypt.compare(password, user.contrasena_hash);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const updateSql = 'UPDATE Usuarios SET ultimo_login = NOW() WHERE id_usuario = ?';
        await this.databaseService.query(updateSql, [user.id_usuario]);
        const secret = this.configService.get('JWT_SECRET');
        if (!secret) {
            throw new Error('JWT_SECRET not configured');
        }
        const token = jwt.sign({ id: user.id_usuario, email: user.correo_electronico, id_rol: user.id_rol }, secret, { expiresIn: '1h' });
        return { token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map