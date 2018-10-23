import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import tickets from './reducers/tickets';
import user from './reducers/user';
import userCreated from './reducers/userCreated';

const reducers = combineReducers({
  user,
  tickets,
  userCreated,
});

export default createStore(reducers, applyMiddleware(thunk));
