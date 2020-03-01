import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import LoginPwd from './components/LoginPwd';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft, faCoffee)


function App() {
  return (<Router>
    <div className="App">
      <div className="wrapper">
        <div className="inner-block">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/log-in" component={LoginPwd} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
