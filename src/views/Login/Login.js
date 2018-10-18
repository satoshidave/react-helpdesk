import React, { Component } from 'react';
import './Login.scss';
import Text from '../../components/Input/Text';
import Password from '../../components/Input/Password';
import Button from '../../components/Button/Button';
import { connect } from 'react-redux';
import { authUser } from '../../actions';
import logo from '../../assets/img/logo.svg';

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
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo"/>
          <Text label="Usuario" inputClassName="App__header--input" placeholder="Ingrese su usuario" onChange={event => this.inputEvents(event, 'user')}/>
					<Password inputClassName="App__header--input" onChange={event => this.inputEvents(event, 'password')} />
					<div className="field">
						<div className="control">
              <Button onClick={event => this.props.authUser(event, this.state.user, this.state.password)} value="Ingresar"/>
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
