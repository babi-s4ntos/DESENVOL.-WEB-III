import express from "express";
const userRoutes = express.Router();
import userController from "../controllers/userController.js";
// endpoint cadastrar usuário
userRoutes.post("/users", userController.createUser);
userRoutes.post("/auth", userController.loginUser);
export default userRoutes;
