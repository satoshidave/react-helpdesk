import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Ticket.scss';

class Ticket extends Component {
  render () {
    const { subject, description, administrable } = this.props;
    return (
      <div className="column is-12">
        <div className={`ticket-box ticket-administrable`}>
          <div className="ticket-box__item-content">
            <span className="ticket-box__item-content--label">Asunto: {subject}</span>
            <span className="ticket-box__item-content--label">Descripcion: {description}</span>
          </div>
          <div className="ticket-box__item-actions">
            <FontAwesomeIcon className="ticket-box__item-actions--delete" icon="trash" />
          </div>
        </div>
      </div>
    )
  }
  
}

export default Ticket;