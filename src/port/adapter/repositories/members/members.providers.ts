import { Member } from "@domain/entities";
import { DataSource } from "typeorm";

export const membersProviders = [
    {
        provide: "MEMBERS_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Member),
        inject: ["DB_CONNECTION"],
    },
];
