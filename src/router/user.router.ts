import express from 'express';
import {type initializeControllers} from '../controllers/index.controllers';

type InitializeUserRouter = ReturnType<typeof initializeControllers>;

export const initializeUserRouter = (controllers: InitializeUserRouter) => {
	const userRouter = express.Router();

	userRouter.get('/', controllers.userController.getUser);

	return userRouter;
};
