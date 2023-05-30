export const initializeUserServices = () => {
	const getUser = (userId: number) => {
		const usersList = [{
			id: 1,
			name: 'Nicolas',
		}, {
			id: 2,
			name: 'Salgado',
		}];

		const user = usersList.find(({id}) => id === userId);
		return user;
	};

	return {
		getUser,
	};
};
