import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Vote from './Vote';
import Home from './Home';
import Navi from './Navi';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
      <Router>
        <Navi></Navi>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/signup' component={Signup}></Route>
          <Route path='/vote' component={Vote}></Route>
        </Switch>
      </Router>
  );
}

export default App;