import { NestFactory } from "@nestjs/core";
import { AppModule } from "./port/adapter/nest/app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ConfigHelper, EnvironmentType } from "helpers/config";
import { Console } from "@helpers/console";

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

    if (config.nodeEnv === EnvironmentType.DEV) {
        Console.writeLine();
        Console.success(`>>> App running on http://[::1]:${config.app.port}`);
        Console.info(`>>> Api documentation available at http://[::1]:${config.app.port}/api`);
    }
}

bootstrap();
