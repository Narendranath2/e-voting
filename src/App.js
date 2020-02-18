import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Signup from './Signup';
import Vote from './Vote';
import Home from './Home';
import Navi from './Navi';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { RemoveScrollBar } from 'react-remove-scroll-bar';

function App() {
  return (
      <Router>
        <Navi></Navi>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home}></Route>
          <Route path='/login' component={Vote}></Route>
          <Route path='/signup' component={Signup}></Route>
          <Route path='/vote' component={Vote}></Route>
        </Switch>
      </Router>
  );
}

export default App;