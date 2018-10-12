import React, { Component } from 'react';
import Text from '../Input/Text';
import Button from '../Button/Button';
import './Incidence.css';

class DeleteUser extends Component {
  inputHandler = (event, id) => {
    const { value } = event.target;
  }
  deleteUser = () => {
    console.log('deleted')
  }
  render () {
    return (
      <>
        <section className="modal-card-body">
          <Text label='Usuario:' className="incidence--label" onChange={event => this.inputHandler(event, 'user')} placeholder='Nombre de usuario' />
        </section>
        <footer className="modal-card-foot">
          <Button onClick={this.deleteUser} value="Eliminar" />
        </footer>
      </>
      
    )
  }
}

export default DeleteUser;