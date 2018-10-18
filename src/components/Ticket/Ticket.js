import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Ticket.scss';

const Ticket = (props) => {
  const { subject, description, administrable } = props;
  return (
    <div className="column is-12">
      <div className={`ticket-box ${administrable ? 'ticket-administrable' : ''}`}>
        <div className="ticket-box__item-content">
          <span className="ticket-box__item-content--label">
            <strong>Asunto: </strong>
            {subject}
          </span>
          <span className="ticket-box__item-content--label">
            <strong>Descripcion: </strong>
            {description}
          </span>
        </div>
        {
          administrable ? (
            <div className="ticket-box__item-actions">
              <FontAwesomeIcon className="ticket-box__item-actions--delete" icon="trash" />
            </div>) : null
        }
      </div>
    </div>
  );
};

export default Ticket;
