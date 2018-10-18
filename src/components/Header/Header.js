import React, {Component} from 'react';
import './Header.scss';
import history from '../../history';
import Button from '../Button/Button'
import { connect } from 'react-redux';
import logo from '../../assets/img/logo.svg';

class Header extends Component {
  componentDidMount () {
    console.log(this.props.user)
  }
  logout = () => {
    localStorage.removeItem('user');
    history.push('/');
    history.go();
  }
  render() {
    const items = [{
      name: 'Logout', onclick: this.logout
    }];
    return (
      <div className="main-header">
        <div className="main-header__left">
          <img src={logo} className="main-header__left--logo" alt="logo"/>
          <h3>{this.props.user.name}</h3>
        </div>
        <div className="main-header__right">
          {
            items.map((item, index) => {
              const { onclick, name } = item;
              return (
                <Button onClick={onclick} value={name} key={index} />
              )
            })
          }
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Header);