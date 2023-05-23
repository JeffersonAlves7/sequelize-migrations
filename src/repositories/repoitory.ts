import { CreateOptions, FindOptions } from "sequelize"

export class Repository<T>{
    protected model: any

    constructor(model: any) {
        this.model = model
    }

    protected create(options?: CreateOptions<T>) {
        this.model.create(options)
    }

    protected findAll(options?: FindOptions<T>): Promise<T> {
        return this.model.findAll(options)
    }

    protected findOne(options: FindOptions<T>): Promise<T> {
        return this.model.findOne(options)
    }

}