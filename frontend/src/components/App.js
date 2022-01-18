import React from "react";
import Splash from './splash/splash';
import Profile from "./profile/profile_container";
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

const App = () => {


  return (
    <div className="App">

        <Switch>
          <AuthRoute path = "/login" component = {LoginContainer} />
          <AuthRoute path = "/signup" component = {SignupContainer} />
          <AuthRoute exact path = "/" component = {Splash}/>
          <Route path='/users/:id' component={Profile}/>
        </Switch>

    </div>
  );
}

export default App;
