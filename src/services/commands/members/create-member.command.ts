import { Member } from "@domain/entities";

export class CreateMemberCommand {
    constructor(private member: Member) {}

    public getMember(): Member {
        return this.member;
    }
}
