import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity("members")
export class Member {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    constructor(firstName: string, lastName: string, email: string, password: string, avatar: string = "") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }
}
