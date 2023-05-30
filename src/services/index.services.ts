import {initializeUserServices} from './user.services';

export const initializeServices = () => {
	const userService = initializeUserServices();

	return {
		userService,
	};
};
