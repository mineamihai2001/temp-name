import { ObjectId } from "mongodb";
import { MongoRepository } from "typeorm";
import { IRepository } from "./IRepository";

export class GenericRepository<T> implements IRepository<T> {
    public constructor(private readonly repository: MongoRepository<T>) {}

    public async add(entity: T): Promise<T> {
        return this.repository.create(entity);
    }

    public async update(id: ObjectId, entity: T): Promise<T> {
        return this.repository.findOneAndUpdate({ _id: id }, entity) as T;
    }

    public async delete(entity: T): Promise<T> {
        return this.repository.remove([entity]).then((res) => res.at(0));
    }

    public async getById(id: ObjectId): Promise<T> {
        return this.repository.findOne({ where: { _id: id } });
    }

    public async getAll(): Promise<T[]> {
        return this.repository.find();
    }
}
