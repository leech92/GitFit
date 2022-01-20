import React from "react";
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashContainer from "./splash/splash"
import Home from "./home/home";
import Footer from "./footer";

const App = () => {


  return (
    <div className="App">

        <Switch>

          <AuthRoute path = "/login" component = {LoginContainer} />
          <AuthRoute path = "/signup" component = {SignupContainer} />
          <AuthRoute exact path = "/" component = {SplashContainer}/>
          <ProtectedRoute path ="/home" component = {Home} />
          <ProtectedRoute path="/discoverWorkouts" component={Home} />
          <ProtectedRoute path="/discoverMealPlans" component={Home} />  
          <ProtectedRoute exact path="/profile" component={Home}/>
          <ProtectedRoute path="/users/:id" component={Home} />
          <ProtectedRoute path="/mealplans/:id" component={Home} />
          <ProtectedRoute path="/gym" component={Home} />

        </Switch>

      <Footer />

    </div>
  );
}

export default App;
