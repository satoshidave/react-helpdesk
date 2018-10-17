import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Ticket.scss';

const Ticket = (props) => {
  return (
    <div className="column is-12">
      <div className="ticket-box">
        <div className="ticket-box__item-content">
          <span className="ticket-box__item-content--label">Asunto: {props.subject}</span>
          <span className="ticket-box__item-content--label">Descripcion: {props.description}</span>
        </div>
        <div className="ticket-box__item-actions">
          <FontAwesomeIcon icon="trash" />
        </div>
      </div>
    </div>
  )
}

export default Ticket;