const axios = require('axios');
const history = require('./history');

const loadState = () => {
  const data = localStorage.getItem('user');
  console.log(data);
  return dispatch => dispatch({
    type: 'STATUS',
    user: JSON.parse(data),
  });
};

const authUser = (user, password) => async (dispatch) => {
  const request = await axios.post('http://127.0.0.1:9000/users', {
    user, password,
  });
  const { data } = request;
  if (data.success === true) {
    history.default.push('/dashboard');
    history.default.go();
  }
  localStorage.setItem('user', JSON.stringify(data));
  return dispatch({
    type: 'AUTH_USER',
    user: data,
  });
};

const resetCreateUser = () => (dispatch) => {
  dispatch({
    type: 'CREATE_USER_STATUS',
    success: false,
  });
};

const createUser = (name, user, password, role) => async (dispatch) => {
  const request = await axios.post('http://127.0.0.1:9000/users/create', {
    name, user, password, role,
  });
  const { data } = request;
  console.log(data);
  const { success } = data;
  return dispatch({
    type: 'CREATE_USER_STATUS',
    success,
  });
};

const deleteUser = id => async () => {
  await axios.post('http://127.0.0.1:9000/users/delete', { id });
};

const createIncidence = (subject, description, user_id) => async (dispatch) => {
  await axios.post('http://127.0.0.1:9000/incidences/create', { subject, description, user_id });
  const request = await axios.post('http://127.0.0.1:9000/incidences/get', { user_id });
  const { data } = request;
  return dispatch({
    type: 'USER_TICKETS',
    tickets: data.data,
  });
};

const loadTickets = user_id => async (dispatch) => {
  const request = await axios.post('http://127.0.0.1:9000/incidences/get', { user_id });
  const { data } = request;
  return dispatch({
    type: 'USER_TICKETS',
    tickets: data.data,
  });
};

const loadAllTickets = () => async (dispatch) => {
  const request = await axios.get('http://127.0.0.1:9000/incidences/all');
  const { data } = request;
  return dispatch({
    type: 'USER_TICKETS',
    tickets: data.data,
  });
};

const deleteTicket = id => async (dispatch) => {
  await axios.post('http://127.0.0.1:9000/incidences/delete', { id });
  const request = await axios.get('http://127.0.0.1:9000/incidences/all');
  const { data } = request;
  return dispatch({
    type: 'USER_TICKETS',
    tickets: data.data,
  });
};

export {
  loadState, authUser, createUser, resetCreateUser,
  createIncidence, loadTickets, loadAllTickets, deleteTicket, deleteUser,
};
