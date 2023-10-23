import { Injectable } from "@nestjs/common";
import { Config, EnvironmentType } from "./types";
import z from "zod";

@Injectable()
export class ConfigHelper {
    private config: Config;
    private static instance: ConfigHelper | null = null;

    private constructor() {
        this.config = this.buildEnvironment();
    }

    private buildEnvironment(): Config {
        const envSchema = z.object({
            NODE_ENV: z.string().min(1),
            APP_PORT: z.string().min(1),
            DB_TYPE: z.string().min(1),
            DB_HOST: z.string().min(1),
            DB_PORT: z.string().min(1),
            DB_DATABASE: z.string().min(1),
        });

        const env = envSchema.parse(process.env);

        return {
            nodeEnv: env.NODE_ENV as EnvironmentType,
            app: {
                port: parseInt(env.APP_PORT),
            },
            db: {
                type: env.DB_TYPE,
                host: env.DB_HOST,
                port: env.DB_PORT,
                database: env.DB_DATABASE,
            },
        };
    }

    public static getInstance(): ConfigHelper {
        if (this.instance === null) {
            this.instance = new ConfigHelper();
        }
        return this.instance;
    }

    public getConfig(): Config {
        return this.config;
    }

    public get<K extends keyof Config>(key: K): Config[K] {
        return this.config[key];
    }
}
