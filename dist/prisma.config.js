"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("prisma/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
console.log('DATABASE_URL:', process.env.DATABASE_URL);
exports.default = (0, config_1.defineConfig)({
    datasource: {
        url: process.env.DATABASE_URL,
    },
});
//# sourceMappingURL=prisma.config.js.map