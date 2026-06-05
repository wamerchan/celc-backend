import { defineConfig } from 'prisma/config';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
console.log('DATABASE_URL:', process.env.DATABASE_URL);
export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});