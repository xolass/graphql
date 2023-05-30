import {type Request, type Response} from 'express';
import {type initializeServices} from '../services/index.services';
import {type GetUserRequest} from './interfaces/user.controllers.interface';

export const initializeUserController = (services: ReturnType<typeof initializeServices>) => {
	const getUser = (req: Request<any, any, any, GetUserRequest>, res: Response) => {
		const {userService} = services;
		const {id: userId} = req.query;
		const user = userService.getUser(Number(userId));

		return res.json(user);
	};

	return {
		getUser,
	};
};
