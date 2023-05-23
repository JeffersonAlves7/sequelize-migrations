import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserRepository } from "../repositories/user.repository";

const userRoutes = Router();

const userRepository = new UserRepository();
const userController = new UserController(userRepository);

userRoutes.get("/all", userController.getAllUsers.bind(userController))
userRoutes.get("/by/email/:email", userController.getByEmail.bind(userController))

export default userRoutes