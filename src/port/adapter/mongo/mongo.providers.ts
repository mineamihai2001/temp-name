import { ConfigHelper } from "helpers/config";
import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: "DB_CONNECTION",
        useFactory: async (): Promise<DataSource> => {
            const config = ConfigHelper.getInstance().getConfig();

            return new DataSource({
                type: config.db.type as "mongodb",
                url: `mongodb://${config.db.host}:${config.db.port}/${config.db.database}`,
                entities: ["dist/domain/entities/**/*.entity.ts"],
                synchronize: false,
            }).initialize();
        },
    },
];
