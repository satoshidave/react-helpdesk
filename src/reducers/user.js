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

export default user;
