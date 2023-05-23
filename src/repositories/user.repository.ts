import { User } from '../../models'
import { UserEntity } from '../entities/user.entity';
import { Repository } from './repoitory';

export class UserRepository extends Repository<UserEntity>{
    constructor() {
        super(User)
    }

    public getByEmail(email: string): Promise<UserEntity | null> {
        return this.findOne({ where: { email } })
    }

    public getAll() {
        return this.findAll()
    }


}
