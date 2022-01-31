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

            // <header className='top-nav'>
            //     <p className='top-button-outter top-button'>
            //         <NavLink className='top-button-home' to="/">Home</NavLink>
            //     </p>
                
            //     <div className="top-right">
            //         <p className='top-button-outter'> 
            //             <NavLink className='top-button-profile top-button' to="/profile">Profile</NavLink>
            //         </p>
            //         <button onClick={this.props.logout}>Logout</button>
            //     </div>
                
            // </header>

            <header className='top-nav'>
                <div className='top-left'>
                    <NavLink to="/">Home</NavLink>
                </div>
                
                <div className="top-right">

                    <NavLink to="/profile">New Workout</NavLink>

                    <NavLink to="/profile">New Meal Plan</NavLink>
                    
                    <NavLink to="/profile">Profile</NavLink>
                 
                    <button onClick={this.props.logout}>Logout</button>

                </div>
                
            </header>
        )
    }
    
}

export default connect(null, mDTP)(TopNavBar); 
// className='top-button'