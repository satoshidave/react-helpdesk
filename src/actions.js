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
		console.log(data)
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

export {
	loadState,
	authUser
}