export enum EnvironmentType {
    DEV = "development",
    PROD = "production",
}

export type Config = {
    nodeEnv: EnvironmentType;
    app: {
        port: number;
    };
    db: {
        type: string;
        host: string;
        port: string;
        database: string;
    };
};
