import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";

dotenv.config();

export const createServer = () => {
	const app = express();

	/**
	 *  Boilerplate
	 */
	//Logger
	const morganMode = process.env.NODE_ENV === "production" ? "combined" : "dev";
	app.use(morgan(morganMode));
	// Parsing
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	// Cors (currently only allows one)
	const corsOrigins =
		process.env.NODE_ENV === "production"
			? {
					origin: process.env.ALLOWED_ORIGIN,
			  }
			: undefined;
	app.use(cors(corsOrigins));
	// Hide server info (security)
	app.disable("x-powered-by");
	// Health check for testing
	app.get("/healthz", (req, res) => {
		return res.json({ ok: true });
	});
	// Hello world (name) for testing
	app.get("/message/:name", (req, res) => {
		return res.json({ message: `hello ${req.params.name}` });
	});

	/**
	 *  Routes
	 */

	app.use("/api/users", userRouter);

	return app;
};
