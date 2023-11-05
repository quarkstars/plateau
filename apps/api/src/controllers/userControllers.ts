import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

// @desc    Register a user
// route:   POST /api/users
// @access  Public
const registerUser = expressAsyncHandler(
	async (req: Request, res: Response) => {
		res.status(200).json({ message: "Auth User" });
	}
);

// @desc    Authenticate a user and get token
// route    POST /api/users/auth
// @access  Public
const loginUser = expressAsyncHandler(async (req: Request, res: Response) => {
	res.status(200).json({ message: "Login User" });
});

// @desc    Logout a user
// route    POST /api/users/logout
// @access  Private
const logoutUser = expressAsyncHandler(async (req: Request, res: Response) => {
	res.status(200).json({ message: "Logout User" });
});

// @desc    Email password reset link
// route    POST /api/users/reset
// @access  Public
const resetUser = expressAsyncHandler(async (req: Request, res: Response) => {
	res.status(200).json({ message: "Reset User" });
});

// @desc    Get a Profile
// route:   GET /api/users/profile
// @access  Private
const getProfile = expressAsyncHandler(async (req: Request, res: Response) => {
	res.status(200).json({ message: "Get User Profile" });
});

// @desc    Update a Profile
// route    PUT /api/users/profile
// @access  Private
const updateProfile = expressAsyncHandler(
	async (req: Request, res: Response) => {
		res.status(200).json({ message: "Update Profile User" });
	}
);

export { registerUser };
