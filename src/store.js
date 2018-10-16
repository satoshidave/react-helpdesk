import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	user: [],
	userCreated: false,
	tickets: []
}

const reducer = (state, action) => {
  switch (action.type) {
		case 'AUTH_USER':
			return {
				...state,
				user: action.user
			}
		case 'STATUS':
			return {
				...state,
				user: action.user
			}
		case 'CREATE_USER_STATUS':
			return {
				...state,
				userCreated: action.success
			}
		case 'USER_TICKETS':
			console.log(action)
			return {
				...state,
				tickets: action.tickets
			}
		default:
			break;
	}
	return state;
}

export default createStore(reducer, initialState, applyMiddleware(thunk));