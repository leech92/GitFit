import React from "react";
import { NavLink } from "react-router-dom";

class LeftNav extends React.Component{
    render() {
        return (
            <div>
                <h3>Discover</h3>
                <ul>
                    <li><NavLink to="discoverWorkouts">Browse workouts</NavLink></li>
                    <li><NavLink to="discoverMealPlans">Browse meal plans</NavLink></li>
                </ul>


                <h3>Buddies</h3>
                <ul>
                    <li>Buddy #1</li>
                    <li>Buddy #2</li>
                    <li>Buddy #3</li>
                    <li>Buddy #4</li>
                </ul>
            </div>
            
        )
    }
}

export default LeftNav