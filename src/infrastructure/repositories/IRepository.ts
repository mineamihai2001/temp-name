import { InsertOneResult, ObjectId } from "mongodb";

export interface IRepository<T> {
    add(entity: T): Promise<T>;
    update(id: ObjectId, entity: T): Promise<T>;
    delete(entity: T): Promise<T>;
    getById(id: ObjectId): Promise<T>;
    getAll(): Promise<T[]>;
}
