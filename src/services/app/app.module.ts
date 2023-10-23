import { Module } from "@nestjs/common";
import { MongoModule } from "port/adapter/mongo";
import { AppController } from "port/adapter/nest/controllers";

@Module({
    imports: [MongoModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}

