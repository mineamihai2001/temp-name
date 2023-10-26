import { CrudRepository } from "../Crud.repository";
import { Member } from "@domain/entities";
import { Inject, Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";

@Injectable()
export class MembersRepository extends CrudRepository<Member> {
    constructor(
        @Inject("MEMBERS_REPOSITORY")
        private readonly membersRepository: MongoRepository<Member>,
    ) {
        super(membersRepository);
    }
}
