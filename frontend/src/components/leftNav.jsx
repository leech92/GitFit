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
        debugger; 
        return (
            <div>
                <section className="discovery">
                    <h3>Discover</h3>
                    <div><NavLink to="discoverWorkouts">Browse workouts</NavLink></div>
                    <div><NavLink to="discoverMealPlans">Browse meal plans</NavLink></div>
                </section>

                <section className="left-buddies">
                    <h3>Buddies</h3>
                    {/* {this.props.currentUser.followings.map(id => <div><NavLink to={`users/${id}`}></NavLink></div>)} */}
                    {currentUser.following.map(id => <NavLink to={`users/${id}`}>id</NavLink>)}
                </section>
            </div>
            
        )
    }
}

export default connect(mSTP, mDTP)(LeftNav); 