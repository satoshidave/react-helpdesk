import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { deleteTicket } from '../../actions';
import './Ticket.scss';

const Ticket = (props) => {
  const {
    subject, description, identifier, administrable, user, userId,
  } = props;
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
          {
            administrable ? (
              <span className="ticket-box__item-content--label">
                <strong>Creado por: </strong>
                {user}
                <> <FontAwesomeIcon icon="id-badge" /> </>
                {userId}
              </span>
            ) : null
          }
        </div>
        {
          administrable ? (
            <div className="ticket-box__item-actions">
              <FontAwesomeIcon
                onClick={event => props.deleteTicket(event, identifier)}
                className="ticket-box__item-actions--delete"
                icon="trash"
              />
            </div>) : null
        }
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTicket(event, identifier) {
    event.preventDefault();
    dispatch(deleteTicket(identifier));
  },
});

export default connect(null, mapDispatchToProps)(Ticket);
