import { env } from "@application/configs";
import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: "DB_CONNECTION",
        useFactory: async () => {
            return new DataSource({
                type: env.DB_TYPE as "mongodb",
                url: `mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_DATABASE}`,
                entities: ["dist/domain/entities/**/*.entity.ts"],
                synchronize: false,
            }).initialize();
        },
    },
];
