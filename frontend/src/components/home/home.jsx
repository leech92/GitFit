import React from "react";
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from "../../util/route_util";
import TopNavBar from "../navBar";
import LeftNav from "../leftNav";
import Feed from "../feed/feed";
import Profile from "../profile/profile_container";
import MealplanContainer from "../mealplan/mealplan_container"
import UsersProfile from '../profile/users_show'; 
import Map from "../maps/map_container"
import "../../stylesheets/home.css"
import DiscoverWorkoutsContainer from '../workouts/discover_workouts_container';
import WorkoutShowContainer from '../workouts/workout_show_container';
import BrowseUser from "../profile/users_browse"

class Home extends React.Component{
    render() {
        return (
            <div className="home-container">
                <TopNavBar />
                <div className="home-main">
                    <div className="left-nav">
                        <LeftNav />
                    </div>
                    <div className="middle-console">
                        <Switch>
                            <ProtectedRoute exact path="/home" component={Feed} />
                            <ProtectedRoute exact path="/feed" component={Feed} />
                            <ProtectedRoute exact path="/discoverWorkouts" component={DiscoverWorkoutsContainer} />
                            <ProtectedRoute exact path="/findBuddies" component={BrowseUser} />
                            <ProtectedRoute exact path="/buddies/:buddyId" component={Feed} />
                            <ProtectedRoute path="/profile" component={Profile}/>
                            <ProtectedRoute path="/users/:id" component={UsersProfile} />
                            <ProtectedRoute path="/mealplans/:id" component={MealplanContainer} />
                            <ProtectedRoute path="/workouts/:id" component={WorkoutShowContainer} />


                            <ProtectedRoute path="/gym" component={Map}/>
                        </Switch>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home;