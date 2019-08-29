import React from 'react';

import { Route, Switch } from "react-router-dom";
import Home from './Component/Home/Home';


import './App.css';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        </Switch>

    </div>
  );
}

export default App;
