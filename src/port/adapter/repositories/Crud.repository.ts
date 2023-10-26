import { MongoRepository, ObjectLiteral } from "typeorm";

export class CrudRepository<T extends ObjectLiteral> {
    public constructor(private readonly repository: MongoRepository<T>) {}

    public async add(entity: T): Promise<T> {
        return this.repository.save(entity);
    }

    public async update(id: string, entity: T): Promise<T> {
        return this.repository.findOneAndUpdate({ _id: id }, entity) as Promise<T>;
    }

    public async delete(entity: T): Promise<T | null> {
        return this.repository.remove([entity]).then((res: T[]) => res.at(0) ?? null);
    }

    public async deleteMany(entities: T[]): Promise<T[]> {
        return this.repository.remove(entities);
    }

    public async getById(id: string): Promise<T | null> {
        return this.repository.findOne({ where: { _id: id } });
    }

    public async getAll(): Promise<T[]> {
        return this.repository.find();
    }
}
