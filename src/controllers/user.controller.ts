import { UserRepository } from "../repositories/user.repository";
import { Controller } from "./controller";
import { Request, Response } from "express";

export class UserController extends Controller {
    constructor(
        private userRepository: UserRepository
    ) {
        super();
    }

    async getAllUsers(req: Request, res: Response) {
        const users = this.userRepository.getAll();
        res.status(200).send(users).end();
    }

    async getByEmail(req: Request, res: Response) {
        const { email } = req.params;
        const user = this.userRepository.getByEmail(email);
        res.status(200).send(user).end()
    }
}