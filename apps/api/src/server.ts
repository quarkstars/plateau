import express from "express";
import morgan from "morgan";
import cors from "cors";

export const createServer = () => {
	const app = express();

	/**
	 *  Boilerplate middleware
	 */
	// Logging
	const morganMode = process.env.NODE_ENV === "production" ? "combined" : "dev";
	app.use(morgan(morganMode));
	// Body parsing
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	// Cors
	const corsOrigins =
		process.env.NODE_ENV === "production"
			? {
					origin: process.env.ALLOWED_ORIGIN,
			  }
			: undefined;
	app.use(cors(corsOrigins));
	// Hide powered by express (security)
	app.disable("x-powered-by");
	// Hello world (name)
	app.get("/message/:name", (req, res) => {
		return res.json({ message: `hello ${req.params.name}` });
	});
	// Health check
	app.get("/healthz", (req, res) => {
		return res.json({ ok: true });
	});

	/**
	 *  Boilerplate middleware
	 */

	return app;
};
