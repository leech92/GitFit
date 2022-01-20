import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
                <p><NavLink to="/">Home</NavLink></p>
                
                <div className="top-right">
                    <p><NavLink to="/profile">Profile</NavLink></p>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
                
            </header>
        )
    }
    
}

export default connect(null, mDTP)(TopNavBar); 