import { connect } from "react-redux";
import React from "react";
import { NavLink } from "react-router-dom";
import { fetchUsers } from "../actions/user_actions";

const mSTP = (state) => {
    return({
        users: state.entities.users, 
        currentUser: state.session.user, 
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers())
    })
}

class LeftNav extends React.Component{
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        this.props.fetchUsers(); 
    }

    render() {
        // debugger; //Anna
        return (
            <div>
                <h3>Discover</h3>
                <ul>
                    <li><NavLink to="discoverWorkouts">Browse workouts</NavLink></li>
                    <li><NavLink to="discoverMealPlans">Browse meal plans</NavLink></li>
                </ul>


                <h3>Buddies</h3>
                <ul>
                    <li>
                     <NavLink to='/users/61e64a68d09b27b1fec83173'> Buddy #1 </NavLink>
                    </li>
                    <li>Buddy #2</li>
                    <li>Buddy #3</li>
                    <li>Buddy #4</li>
                </ul>
            </div>
            
        )
    }
}

export default connect(mSTP, mDTP)(LeftNav); 