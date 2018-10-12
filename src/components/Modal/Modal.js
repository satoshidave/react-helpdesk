import React, { Component } from 'react';
import Incidence from '../Form/Incidence';
import './Modal.css';

class Modal extends Component {
  constructor () {
    super ();
    this.state = {
      isOpen: false
    }
    this.inputs = React.createRef();
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    }, () => {
      if (!this.state.isOpen) this.clearInputs();
    })
  }
  clearInputs = () => {
    this.inputs.current.clearInputs();
  }
  render () {
    return (
      <div className={`modal ${this.state.isOpen ? 'is-active':''}`}>
        <div className="modal-background">
          <div className="modal--container">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Reportar Incidencia</p>
                <button onClick={this.toggleModal} className="delete"></button>
              </header>
              <Incidence ref={this.inputs} />
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Modal;