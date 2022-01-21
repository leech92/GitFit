import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { fetchUsers } from "../../actions/user_actions";
import "../../stylesheets/discover_users.css"

const mSTP = state => ({
    users: state.entities.users,
    currentUserId: state.session.user.id
});

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})


class BrowseUsers extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        if (!Object.keys(this.props.users).length) {return null}
        const { users, currentUserId} = this.props;
        const currentUser = users.filter(user => user._id === currentUserId)[0];
        const notBuddies = users.filter(user => !currentUser.following.includes(user._id) && user._id !== currentUserId)

        return(
            <div>
                <h1 id="disco-buddy">EVERYONE IS A BUDDY THAT YOU JUST HAVE NOT MADE YET</h1>
                {notBuddies.map(user =>           
                    <Link to={`users/${user._id}`}><div className="not-buddy">
                        {user.username}</div></Link>  
                      
                )}
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(BrowseUsers);

