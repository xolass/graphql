import {type initializeServices} from '../services/index.services';
import {initializeUserController} from './user.controllers';

type InitializeControllers = ReturnType<typeof initializeServices>;

export const initializeControllers = (services: InitializeControllers) => {
	const userController = initializeUserController(services);
	return {
		userController,
	};
};
