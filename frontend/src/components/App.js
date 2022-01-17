import React from "react";
import SplashContainer from './splash/splash_container';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {


  return (
    <div className="App">


        <Switch>
          <AuthRoute exact path = "/" component = {SplashContainer}/>
        </Switch>

    </div>
  );
}

export default App;
