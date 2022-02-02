import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import "../stylesheets/navBar.css";
import { openModal } from '../actions/modal_actions';


const mDTP = dispatch => {
    return ({
        logout: () => dispatch(logout()), 
        openModal: (modal) => dispatch(openModal(modal))
    })
}


class TopNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <header className='top-nav'>
                <div className='top-left'>
                    <NavLink to="/">GitFit</NavLink>
                </div>
                
                <div className="top-right">
                    <NavLink to="/"><button className='top-right-btn'>Home</button></NavLink>
                    <button className='top-right-btn' onClick={()=>this.props.openModal('create mealplan')}>New Mealplan</button>
                    <NavLink to="/profile"><button className='top-right-btn'>Profile</button></NavLink>
                    <button className='top-right-btn' onClick={this.props.logout}>Logout</button>
                </div>
                
            </header>
        )
    }
    
}

export default connect(null, mDTP)(TopNavBar); 
// className='top-button'