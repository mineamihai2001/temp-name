import { NestFactory } from "@nestjs/core";
import { AppModule } from "./port/adapter/nest/app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ConfigHelper } from "helpers/config";

async function bootstrap(): Promise<void> {
    const config = ConfigHelper.getInstance().getConfig();

    const app = await NestFactory.create(AppModule);

    const documentConfig = new DocumentBuilder()
        .setTitle("temp-name API")
        .setDescription("no description")
        .setVersion("0.1")
        .build();
    const document = SwaggerModule.createDocument(app, documentConfig);
    SwaggerModule.setup("api", app, document);

    await app.listen(config.app.port);

    console.log(`App running on http://[::1]:${config.app.port}/api`);
}

bootstrap();
