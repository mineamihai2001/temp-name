import { NestFactory } from "@nestjs/core";
import { AppModule } from "./services/app/app.module";
import { ConfigHelper } from "helpers/config";

async function bootstrap() {
    const config = ConfigHelper.getInstance().getConfig();

    const app = await NestFactory.create(AppModule);
    await app.listen(config.app.port);

    console.log(`App running on http://[::1]:${config.app.port}`);
}

bootstrap();
