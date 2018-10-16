const axios = require('axios');
const history = require('./history');

const loadState = () => {
	const data = localStorage.getItem('user');
	console.log(data);
	return dispatch => {
		return dispatch({
				type: 'STATUS',
				user: JSON.parse(data)
			})
	}
}

const authUser = (user, password) => {
	return async dispatch => {
		const request =  await axios.post('http://127.0.0.1:9000/users', {user, password});
		const {data} = request;
		console.log(data);
		if (data.success === true) {
			history.default.push('/dashboard');
			history.default.go();
		}
		localStorage.setItem('user', JSON.stringify(data));
		return dispatch({
			type: 'AUTH_USER',
			user: data
		})
	}
}

const resetCreateUser = () => {
	return dispatch => {
		dispatch({
			type: 'CREATE_USER_STATUS',
			success: false
		});
	}
}

const createUser = (name, user, password, role) => {
	return async dispatch => {
		const request = await axios.post('http://127.0.0.1:9000/createUser', { name, user, password, role});
		const { data } = request;
		console.log(data);
		const { success } = data;
		return dispatch({
			type: 'CREATE_USER_STATUS',
			success
		});
	}
}

const createIncidence = (subject, description, user_id) => {
	return async dispatch => {
		await axios.post('http://127.0.0.1:9000/incidences/create', { subject, description, user_id });
		const request = await axios.post('http://127.0.0.1:9000/incidences/get', { user_id });
		const { data } = request;
		return dispatch({
			type: 'USER_TICKETS',
			tickets: data.data
		})
	}
}

const loadTickets = (user_id) => {
	return async dispatch => {
		const request = await axios.post('http://127.0.0.1:9000/incidences/get', { user_id });
		console.log(request)
		const { data } = request;
		return dispatch({
			type: 'USER_TICKETS',
			tickets: data.data
		})
	}
}

export {
	loadState,
	authUser,
	createUser,
	resetCreateUser,
	createIncidence,
	loadTickets
}