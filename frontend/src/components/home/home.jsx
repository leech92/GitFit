import React from "react";
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from "../../util/route_util";
import TopNavBar from "../navBar";
import LeftNav from "../leftNav";
import Feed from "../feed/feed";
import Profile from "../profile/profile_container";
import "../../stylesheets/home.css"

class Home extends React.Component{
    render() {
        return (
            <div className="home-container">
                <TopNavBar />
                <div className="home-main">
                    <div className="left-nav">
                        <LeftNav />
                    </div>
                    <div>
                        <Switch>
                            <ProtectedRoute exact path="/home" component={Feed} />
                            <ProtectedRoute exact path="/feed" component={Feed} />
                            <ProtectedRoute exact path="/discoverWorkouts" component={Feed} />
                            <ProtectedRoute exact path="/discoverMealPlans" component={Feed} />
                            <ProtectedRoute exact path="/buddies/:buddyId" component={Feed} />
                            <ProtectedRoute path="/profile" component={Profile}/>
                        </Switch>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home;