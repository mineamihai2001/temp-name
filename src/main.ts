import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { env } from "@application/configs";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(parseInt(env.APP_PORT) || 3000);
}

bootstrap();
