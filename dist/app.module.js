"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./auth/auth.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const lineas_module_1 = require("./lineas/lineas.module");
const equipos_module_1 = require("./equipos/equipos.module");
const asignaciones_module_1 = require("./asignaciones/asignaciones.module");
const revisiones_module_1 = require("./revisiones/revisiones.module");
const reportes_module_1 = require("./reportes/reportes.module");
const metricas_module_1 = require("./metricas/metricas.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            usuarios_module_1.UsuariosModule,
            lineas_module_1.LineasModule,
            equipos_module_1.EquiposModule,
            asignaciones_module_1.AsignacionesModule,
            revisiones_module_1.RevisionesModule,
            reportes_module_1.ReportesModule,
            metricas_module_1.MetricasModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map