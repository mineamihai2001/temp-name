import { MongoRepository } from "typeorm";

export class GenericRepository<T> {
    public constructor(private readonly repository: MongoRepository<T>) {}

    public add(entity: T): Promise<T> {
        return this.repository.save(entity);
    }

    // public update(entity: T): Promise<T> {
    //     return this.repository.updateOne(entity)
    // }
}
