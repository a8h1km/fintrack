import { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv';
import './envConfig.ts'

dotenv.config()

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/schema.jsx",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DATABASE_URL!,
    },
});
