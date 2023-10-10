import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

export enum UserType {
    MEMBER = "member",
    COACH = "coach",
}

@Entity("users")
export class User {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    type: UserType;

    public constructor(email: string, password: string, type: UserType) {
        this.email = email;
        this.password = password;
        this.type = type;
    }
}
