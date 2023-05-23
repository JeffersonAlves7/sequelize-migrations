import { Model } from "sequelize"

export class UserEntity extends Model {
    public id!: number
    public name!: string
    public email!: string
    public pasword!: string
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}