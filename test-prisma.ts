import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb(process.env.DATABASE_URL as string);
const db = new PrismaClient({ adapter } as any);
db.$queryRawUnsafe('SELECT 1').then(res => { console.log("Query Success:", res); process.exit(0); }).catch(e => { console.log("Query Error:", e.message); process.exit(0); });
