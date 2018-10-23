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

export default tickets;
