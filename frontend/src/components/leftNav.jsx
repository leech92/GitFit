import { connect } from "react-redux";
import React from "react";
import { NavLink } from "react-router-dom";
import { fetchUsers } from "../actions/user_actions";
import "../stylesheets/left-nav.css"

const mSTP = (state) => {
    return({
        users: state.entities.users, 
        currentUser: state.session.user, 
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),
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
        if (!Object.keys(this.props.users).length) {
            return null
        }

        const currentUser = this.props.users.filter(user =>user._id === this.props.currentUser.id)[0];
        const buddies = currentUser.following.filter(id => id !== null)

        // if they aren't following anyone there is a prompt to tell them to follow someone.
        let alone = null; 
        if(buddies.length < 1) {
            alone = 'You aren\'t following anyone yet, try following someone to have a buddy!'; 
        } else {
            alone = null; 
        }

        return (
            <div className="left-container">
                <section className="discovery">
                    <h3 className="left-titles">Discover</h3>
                    <NavLink to="/discoverWorkouts"><div className="left-links">Browse workouts</div></NavLink>
                    <NavLink to="/discoverMealPlans"><div className="left-links">Browse meal plans</div></NavLink>
                </section>

                <section className="left-buddies">
                    <h3 className="left-titles">Buddies</h3>
                    <div>{alone}</div>
                    {/* {this.props.currentUser.followings.map(id => <div><NavLink to={`users/${id}`}></NavLink></div>)} */}

                    {buddies.map(id => <NavLink to={`/users/${id}`} key={id}><div className="left-links">{this.props.users.filter(user => user._id === id)[0].username}</div></NavLink>)}
                </section>

                <section className='featured-buddies'>
                    <h3 className='left-titles'> Featured </h3>
                    <NavLink to='/users/61e78094771326308d954d5e'><div className="left-links">Tashi</div></NavLink>
                    <NavLink to='/users/61e8b5990a41587ae6dbcd2c'><div className="left-links">Marco</div></NavLink>
                    <NavLink to='/users/61e64a68d09b27b1fec83173'><div className="left-links">Anna</div></NavLink>
                    <NavLink to='/users/61e820d434256ef3da85279a'><div className="left-links">Christian</div></NavLink>
                </section>

                <section className="gym">
                    <NavLink to="/gym"><div className="left-links">Find a gym!</div></NavLink>
                </section>

            </div>
            
        )
    }
}

export default connect(mSTP, mDTP)(LeftNav); 