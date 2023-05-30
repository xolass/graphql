import {type initializeControllers} from '../controllers/index.controllers';
import {initializeUserRouter} from './user.router';
import express from 'express';

type InitializeRouter = ReturnType<typeof initializeControllers>;

export const initializeRouter = (controllers: InitializeRouter) => {
	const router = express.Router();
	const userRouter = initializeUserRouter(controllers);

	router.use('/user', userRouter);

	return router;
};
