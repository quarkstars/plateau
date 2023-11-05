import express, { Request, Response } from "express";
import { registerUser } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.post("/", registerUser);

export default userRouter;
