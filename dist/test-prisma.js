"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_mariadb_1 = require("@prisma/adapter-mariadb");
const adapter = new adapter_mariadb_1.PrismaMariaDb(process.env.DATABASE_URL);
const db = new client_1.PrismaClient({ adapter });
db.$queryRawUnsafe('SELECT 1').then(res => { console.log("Query Success:", res); process.exit(0); }).catch(e => { console.log("Query Error:", e.message); process.exit(0); });
//# sourceMappingURL=test-prisma.js.map