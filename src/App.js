import React, {Component} from 'react';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard'
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import { loadState } from './actions';
import history from './history';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faIdBadge } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faIdBadge);

class App extends Component {
  state = {
    logged: false
  }
  componentWillMount () {
    const data = localStorage.getItem('user');
    const user = JSON.parse(data);
    console.log(user)
    if (user !== null && user.success === true) {
      this.setState({
        logged: true
      });
      this.props.loadState();
    }
  }
  render () {
    return (
      <Switch>
        <Route exact path="/" component={() => {
          if (!this.state.logged) {
            return <Login />;
          } else {
            history.push('/dashboard');
            return <Dashboard />;
          }
        }} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    logged: state.logged
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadState () {
      dispatch(loadState())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
