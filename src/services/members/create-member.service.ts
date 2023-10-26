import { Injectable } from "@nestjs/common";
import { MembersRepository } from "@port/adapter/repositories";
import { Log } from "@helpers/log";
import { CreateMemberCommand } from "@services/commands";
import { Member } from "@domain/entities";

@Injectable()
export class CreateMemberService {
    constructor(
        private readonly membersRepository: MembersRepository,
        private readonly log: Log,
    ) {}

    public async createMember(command: CreateMemberCommand): Promise<Member> {
        return this.membersRepository.add(command.getMember());
    }
}
