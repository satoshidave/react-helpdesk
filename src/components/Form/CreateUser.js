import React, { Component } from 'react';
import Text from '../Input/Text';
import Password from '../Input/Password';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { createUser } from '../../actions';
import './Incidence.scss';

class CreateUser extends Component {
  state = {
    name: null,
    user: null,
    password: null,
    role: 0
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
      case 'role':
        this.setState({
          role: value
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
          <div className="field">
            <label className="label incidence--label">Rol:</label>
            <div className="select">
              <select onChange={event => this.inputHandler(event, 'role')} >
                <option value="0">-- Seleccione</option>
                <option value="1">Administrador</option>
                <option value="2">Usuario</option>
              </select>
            </div>
          </div>
          
        </section>
        <footer className="modal-card-foot">
          <Button onClick={event => this.props.createUser(event, name, user, password, role)} value="Crear" />
        </footer>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    createUser (event, name, user, password, role) {
      event.preventDefault();
      if (
        name !== null && name !== undefined && name !== '' &&
        user !== null && user !== undefined && user !== '' &&
        password !== null && password !== undefined && password !== '' && 
        role !== null && role !== undefined && role !== '' && role !== 0 && role !== "0"
      ) {
        props.toggleModal();
        dispatch(createUser(name, user, password, role));
      } else {
        alert('Faltan datos por ingresar');
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateUser);