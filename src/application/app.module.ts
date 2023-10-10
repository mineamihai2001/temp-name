import { Module } from "@nestjs/common";
import { AppController } from "@api/controllers";
import { DatabaseModule } from "./database";

@Module({
    imports: [DatabaseModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}

