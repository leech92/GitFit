import React from "react";
import Splash from './splash/splash';
import Profile from "./profile/profile_container";
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashContainer from "./splash/splash"
import MealplanContainer from "./mealplan/mealplan_container"
import Home from "./home/home";
import Footer from "./footer";

import Map from "./maps/maps"

const App = () => {


  return (
    <div className="App">

        <Switch>

          <AuthRoute path = "/login" component = {LoginContainer} />
          <AuthRoute path = "/signup" component = {SignupContainer} />
          {/* <AuthRoute exact path = "/" component = {Splash}/> */}
          <AuthRoute exact path = "/" component = {SplashContainer}/>
          {/* <AuthRoute exact path="/" component={Map} /> */}
          <ProtectedRoute path ="/home" component = {Home} />
          <ProtectedRoute path="/discoverWorkouts" component={Home} />
          <ProtectedRoute path="/discoverMealPlans" component={Home} />  
          <ProtectedRoute path="/profile" component={Home}/>
          <ProtectedRoute path="/users/:id" component={Home} />
          <ProtectedRoute path="/mealplans/:id" component={Home} />
          <Route path='/users/:id' component={Profile}/>
        </Switch>

      <Footer />

    </div>
  );
}

export default App;
