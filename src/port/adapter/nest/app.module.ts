import { Module } from "@nestjs/common";
import { AppController } from "port/adapter/nest/controllers";
import { MembersModule } from "./modules/members.modules";

@Module({
    imports: [MembersModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
