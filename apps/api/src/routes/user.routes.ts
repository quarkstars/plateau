import expressAsyncHandler from "express-async-handler";
import express, { Request, Response } from "express";
import { registerUser } from "controllers";

const userRouter = express.Router();

userRouter.post(
	"/",
	expressAsyncHandler(async (req: Request, res: Response) => {
		const registeredUser = await registerUser();
		res.status(200).json(registeredUser);
	})
);

export default userRouter;
