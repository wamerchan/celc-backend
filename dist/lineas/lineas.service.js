"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineasService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let LineasService = class LineasService {
    databaseService;
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        const sql = 'SELECT * FROM Lineas';
        return this.databaseService.query(sql);
    }
    async findById(id) {
        const sql = 'SELECT * FROM Lineas WHERE id = ?';
        const lineas = await this.databaseService.query(sql, [id]);
        return lineas[0] || null;
    }
    async create(data) {
        const sql = 'INSERT INTO Lineas (numero, estado, fecha_creacion) VALUES (?, ?, NOW())';
        const result = await this.databaseService.query(sql, [data.numero, data.estado]);
        return { id: result.insertId };
    }
    async update(id, data) {
        const sql = 'UPDATE Lineas SET numero = ?, estado = ? WHERE id = ?';
        await this.databaseService.query(sql, [data.numero, data.estado, id]);
        return this.findById(id);
    }
    async delete(id) {
        const sql = 'DELETE FROM Lineas WHERE id = ?';
        await this.databaseService.query(sql, [id]);
        return { message: 'Línea eliminada' };
    }
};
exports.LineasService = LineasService;
exports.LineasService = LineasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], LineasService);
//# sourceMappingURL=lineas.service.js.map