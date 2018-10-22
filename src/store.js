import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const user = (state = [], action) => {
  switch (action.type) {
  case 'AUTH_USER':
    return action.user;
  case 'STATUS':
    return action.user;
  default:
    break;
  }
  return state;
};

const userCreated = (state = [], action) => {
  switch (action.type) {
  case 'CREATE_USER_STATUS':
    return action.success;
  default:
    break;
  }
  return state;
};

const tickets = (state = [], action) => {
  switch (action.type) {
  case 'USER_TICKETS':
    console.log(action);
    return action.tickets;
  default:
    break;
  }
  return state;
};

const reducers = combineReducers({
  user,
  tickets,
  userCreated,
});

export default createStore(reducers, applyMiddleware(thunk));
