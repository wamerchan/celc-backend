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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const bcrypt = __importStar(require("bcrypt"));
let UsuariosService = class UsuariosService {
    databaseService;
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        const users = await this.databaseService.usuario.findMany({
            include: {
                rol: true
            }
        });
        return users.map(u => ({
            id: u.id,
            nombre: u.nombres, nombres: u.nombres,
            apellidos: u.apellidos,
            email: u.correoElectronico,
            id_rol: u.rolId,
            rol: u.rol.nombreRol,
            fecha_creacion: u.fechaCreacion,
            ultimo_login: u.ultimoLogin
        }));
    }
    async findById(id) {
        const u = await this.databaseService.usuario.findUnique({
            where: { id },
            include: {
                rol: true
            }
        });
        if (!u)
            return null;
        return {
            id: u.id,
            nombre: u.nombres, nombres: u.nombres,
            apellidos: u.apellidos,
            email: u.correoElectronico,
            id_rol: u.rolId,
            rol: u.rol.nombreRol,
            fecha_creacion: u.fechaCreacion,
            ultimo_login: u.ultimoLogin
        };
    }
    async create(data) {
        const saltRounds = 10;
        const contrasenaHash = await bcrypt.hash(data.password, saltRounds);
        const user = await this.databaseService.usuario.create({
            data: {
                nombres: data.nombre,
                apellidos: data.apellidos || '',
                correoElectronico: data.email,
                contrasenaHash: contrasenaHash,
                rolId: data.id_rol,
                cedula: data.cedula || Date.now().toString(),
            }
        });
        return { id: user.id };
    }
    async update(id, data) {
        const updateData = {};
        if (data.nombre)
            updateData.nombres = data.nombre;
        if (data.apellidos)
            updateData.apellidos = data.apellidos;
        if (data.email)
            updateData.correoElectronico = data.email;
        if (data.id_rol)
            updateData.rolId = data.id_rol;
        if (data.cedula)
            updateData.cedula = data.cedula;
        if (Object.keys(updateData).length === 0)
            return null;
        await this.databaseService.usuario.update({
            where: { id },
            data: updateData
        });
        return this.findById(id);
    }
    async delete(id) {
        await this.databaseService.usuario.delete({
            where: { id }
        });
        return { message: 'Usuario eliminado' };
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map