import React, { Component } from 'react';
import Text from '../Input/Text';
import Password from '../Input/Password';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { createUser } from '../../actions';
import './Incidence.css';

class CreateUser extends Component {
  state = {
    name: null,
    user: null,
    password: null,
    role: 1
  }
  inputHandler = (event, action) => {
    const { value } = event.target;
    switch (action) {
      case 'name':
        this.setState({
          name: value
        });
        break;
      case 'user':
        this.setState({
          user: value
        });
        break;
      case 'password':
        this.setState({
          password: value
        });
        break;
      default:
        break;
    }
  }
  render () {
    const { name, user, password, role } = this.state;
    return (
      <>
        <section className="modal-card-body">
          <Text label='Nombre:' className="incidence--label" onChange={event => this.inputHandler(event, 'name')} placeholder='Nombres y Apellidos del usuario' />
          <Text label='Usuario:' className="incidence--label" onChange={event => this.inputHandler(event, 'user')} placeholder='Nombre de usuario' />
          <Password className="incidence--label" onChange={event => this.inputHandler(event, 'password')} />
        </section>
        <footer className="modal-card-foot">
          <Button onClick={event => this.props.createUser(event, name, user, password, role)} value="Crear" />
        </footer>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser (event, name, user, password, role) {
      event.preventDefault();
      if (
        name !== null && name !== undefined && name !== '' &&
        user !== null && user !== undefined && user !== '' &&
        password !== null && password !== undefined && password !== ''
      ) {
        dispatch(createUser(name, user, password, role));
      } else {
        alert('Faltan datos por ingresar');
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateUser);