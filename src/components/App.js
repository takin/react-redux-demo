import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

import Login from './Login';
import Main from './Main';

class App extends Component {
  render() {
    return this.props.loggedIn ? <Main /> : <Login />;
  }
}

const mapStateToProps = state => {
  return {
    loggedIn:true
  };
}

export default connect(mapStateToProps)(App);
