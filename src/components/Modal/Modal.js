import React, { Component } from 'react';
import Incidence from '../Form/Incidence';
import CreateUser from '../Form/CreateUser';
import DeleteUser from '../Form/DeleteUser';
import './Modal.css';

class Modal extends Component {
  constructor () {
    super ();
    this.state = {
      isOpen: false,
      component: null,
      title: null
    }
  }
  toggleModal = (action = '') => {
    this.setState({
      isOpen: !this.state.isOpen
    }, () => {
      if (this.state.isOpen === true) {
        console.log(action)
        switch (action) {
          case 'incidence':
            this.setState({
              title: 'Reportar Incidencia',
              component: <Incidence toggleModal={this.toggleModal} />
            });
            break;
          case 'create-user':
            this.setState({
              title: 'Crear usuario',
              component: <CreateUser toggleModal={this.toggleModal} />
            });
            break;
          case 'delete-user':
            this.setState({
              title: 'Eliminar usuario',
              component: <DeleteUser toggleModal={this.toggleModal} />
            });
            break;
          default:
            this.setState({
              component: <span>No component here</span>
            })
            break;
        }
      } else {
        this.setState({
          title: null,
          component: null
        })
      }
    })
  }
  render () {
    return (
      <div className={`modal ${this.state.isOpen ? 'is-active':''}`}>
        <div className="modal-background">
          <div className="modal--container">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{this.state.title}</p>
                <button onClick={this.toggleModal} className="delete"></button>
              </header>
              { this.state.component }
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Modal;