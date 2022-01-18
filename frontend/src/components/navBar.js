import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import "../stylesheets/navBar.css";


const mDTP = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}


class TopNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Home</p>
                <p>My Workouts</p>
                <p>Meal Plans</p>
                <p>Profile</p>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
    
}

export default connect(null, mDTP)(TopNavBar); 