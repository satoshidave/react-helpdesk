const userCreated = (state = [], action) => {
  switch (action.type) {
  case 'CREATE_USER_STATUS':
    return action.success;
  default:
    break;
  }
  return state;
};

export default userCreated;
