import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Navi from './Navi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Navi></Navi>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/signup' component={Signup}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;