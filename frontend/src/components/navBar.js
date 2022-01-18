import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <header className='top-nav'>
                <p><Link to="/">Home</Link></p>
                <p>My Workouts</p>
                <p>Meal Plans</p>
                <p><Link to="/profile">Profile</Link></p>
                <button onClick={this.props.logout}>Logout</button>
            </header>
        )
    }
    
}

export default connect(null, mDTP)(TopNavBar); 