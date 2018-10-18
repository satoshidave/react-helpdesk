import React, { Component } from 'react';
import Text from '../Input/Text';
import Button from '../Button/Button';
import { deleteUser } from '../../actions';
import { connect } from 'react-redux';
import './Incidence.scss';

class DeleteUser extends Component {
  state = {
    userId: 0
  };
  inputHandler = (event, id) => {
    const { value } = event.target;
    const isNumber = value > 0;
    if (isNumber === true) {
      this.setState({
        userId: value
      });
    }
  }
  render () {
    return (
      <>
        <section className="modal-card-body">
          <Text label='ID de usuario:' className="incidence--label" onChange={event => this.inputHandler(event, 'user')} placeholder='ID de usuario' />
        </section>
        <footer className="modal-card-foot">
          <Button onClick={event => this.props.deleteUser(event, this.state.userId, this.props.user.role)} value="Eliminar" />
        </footer>
      </>
    );
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  deleteUser(event, userId, role) {
    event.preventDefault();
    if (userId > 0 && role === 1) {
      props.toggleModal();
      dispatch(deleteUser(userId, role));
    }
  },
});

const mapStateToProps = state => ({user: state.user})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);