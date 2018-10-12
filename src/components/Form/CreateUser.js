import React, { Component } from 'react';
import Text from '../Input/Text';
import Password from '../Input/Password';
import Button from '../Button/Button';
import './Incidence.css';

class CreateUser extends Component {
  inputHandler = (event, id) => {
    const { value } = event.target;
  }
  createUser = () => {
    console.log('created')
  }
  render () {
    return (
      <>
        <section className="modal-card-body">
          <Text label='Nombre:' className="incidence--label" onChange={event => this.inputHandler(event, 'name')} placeholder='Nombres y Apellidos del usuario' />
          <Text label='Usuario:' className="incidence--label" onChange={event => this.inputHandler(event, 'user')} placeholder='Nombre de usuario' />
          <Password className="incidence--label" />
        </section>
        <footer className="modal-card-foot">
          <Button onClick={this.createUser} value="Crear" />
        </footer>
      </>
      
    )
  }
}

export default CreateUser;