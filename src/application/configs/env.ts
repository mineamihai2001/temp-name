import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.string().min(1),
    APP_PORT: z.string().min(1),
});

export const env = envSchema.parse(process.env);
