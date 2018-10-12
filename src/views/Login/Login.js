import React, { Component } from 'react';
import './Login.css';
import Text from '../../components/Input/Text';
import Password from '../../components/Input/Password';
import { connect } from 'react-redux';
import { authUser } from '../../actions';

class Login extends Component {
  state = {
    user: null,
    password: null
  }
  inputEvents = (event, type) => {
    const { value } = event.target;
    switch (type) {
      case 'user':
        this.setState({
          user: value
        });
        break;
      case 'password':
        this.setState({
          password: value
        });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <Text label="Usuario" placeholder="Ingrese su usuario" onChange={event => this.inputEvents(event, 'user')}/>
					<Password onChange={event => this.inputEvents(event, 'password')} />
					<div className="field">
						<div className="control">
							<div className="button link" onClick={event => this.props.authUser(event, this.state.user, this.state.password)} >Ingresar</div>
						</div>
					</div>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authUser (event, user, password) {
      event.preventDefault();
      dispatch(authUser(user, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);
