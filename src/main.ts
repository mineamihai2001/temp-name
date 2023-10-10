import { NestFactory } from "@nestjs/core";
import { AppModule } from "./application/app.module";
import { env } from "@application/configs";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(parseInt(env.APP_PORT) || 3000);
}


bootstrap();
