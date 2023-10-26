import { Module } from "@nestjs/common";
import { MongoModule } from "@port/adapter/mongo";
import { CreateMemberController } from "../controllers";
import { CreateMemberService } from "@services/members";
import { LogModule } from "@helpers/log";
import { MembersRepository } from "@port/adapter/repositories";
import { membersProviders } from "@port/adapter/repositories/members/members.providers";

@Module({
    imports: [MongoModule, LogModule],
    controllers: [CreateMemberController],
    providers: [CreateMemberService, MembersRepository, ...membersProviders],
    exports: [CreateMemberService, MembersRepository, ...membersProviders],
})
export class MembersModule {}
