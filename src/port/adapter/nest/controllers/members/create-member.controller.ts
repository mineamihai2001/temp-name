import { Member } from "@domain/entities";
import { Log } from "@helpers/log";
import { Controller, Get, Post } from "@nestjs/common";
import { CreateMemberCommand } from "@services/commands";
import { CreateMemberService } from "@services/members";

@Controller("members")
export class CreateMemberController {
    constructor(
        private readonly createMemberService: CreateMemberService,
        private readonly log: Log,
    ) {}

    @Post()
    public async createMember(): Promise<Member> {
        const command = new CreateMemberCommand(new Member("firstName", "lastName", "email@mail.com", "password"));

        return this.createMemberService.createMember(command);
    }
}
