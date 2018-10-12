import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	user: [],
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
		default:
			break;
	}
	return state;
}

export default createStore(reducer, initialState, applyMiddleware(thunk));