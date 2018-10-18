import React, { Component } from 'react';
import Button from '../Button/Button';
import Text from '../Input/Text';
import './Incidence.scss';
import { connect } from 'react-redux';
import { createIncidence } from '../../actions';

class Incidence extends Component {
  state = {
    subject: null,
    description: null
  }
  inputHandler = (event) => {
    const { value, type } = event.target;
    switch (type) {
      case 'text':
        this.setState({
          subject: value
        });
        break;
      case 'textarea':
        this.setState({
          description: value
        });
        break;
      default:
      break;
    }
  }
  clearInputs = () => {
    this.setState({
      subject: null,
      description: null
    });
    console.log(this.state)
  }
  componentWillUnmount () {
    this.clearInputs();
  }
  render () {
    const { subject, description } = this.state;
    const { id } = this.props.user;
    return (
      <>
        <section className="modal-card-body">
          <Text label='Asunto:' className="incidence--label" onChange={event => this.inputHandler(event)} placeholder='Asunto de la incidencia' />
          <div className="field">
            <label className="label incidence--label">Detalle:</label>
            <textarea cols="30" rows="10" className="textarea" placeholder="Comente de manera detallada la incidencia" onChange={event => this.inputHandler(event)} ></textarea>
          </div>
        </section>
        <footer className="modal-card-foot">
          <Button onClick={event => this.props.createIncidence(event, subject, description, id)} value="Enviar Incidencia" />
        </footer>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    createIncidence(event, subject, description, user_id) {
      event.preventDefault();
      if (subject && subject !== '' && 
      description && description !== '' && 
      user_id && user_id !== '') {
        props.toggleModal();
        dispatch(createIncidence(subject, description, user_id));
      } else {
        alert('Faltan datos por ingresar');
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Incidence);