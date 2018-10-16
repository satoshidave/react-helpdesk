import React from 'react';
import './Ticket.css';

const Ticket = (props) => {
  return (
    <div className="column is-12">
      <div className="ticket-box">
        <span className="ticket-label">Asunto: {props.subject}</span>
        <span className="ticket-label">Descripcion: {props.description}</span>
      </div>
    </div>
  )
}

export default Ticket;