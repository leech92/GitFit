import React from 'react';
import "../../stylesheets/profile.css";
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { follow, fetchUsers } from '../../actions/user_actions'

const mSTP = (state) => {
  return {
    currentUser: state.session.user, 
    users: state.entities.users, 
    // buddy: state.entities.users[.match.params.id]
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()), 
  follow: (obj) => dispatch(follow(obj)),
  fetchUsers: () => dispatch(fetchUsers())
});


class UsersProfile extends React.Component {

    constructor(props){
        super(props)
        this.toggleFollow = this.toggleFollow.bind(this); 
    }

    componentDidMount() {
        this.props.fetchUsers(); 
    }

    // componentDidUpdate(prevProps) {
    //     const currentUser = this.props.users.filter(user =>user._id === this.props.currentUser.id)[0];
    //     const prevCurrentUser = prevProps.users.filter(user =>user._id === prevProps.currentUser.id)[0]
    //     if(currentUser.following.length !== prevCurrentUser.following.length) {
    //         this.props.fetchUsers(); 
    //     }

    //     // if(this.props.currentUser.following !== prevProps.currentUser.following) {
    //     //     this.props.fetchUsers(); 
    //     // }
    // }

    toggleFollow(e) {
        e.preventDefault(); 
        let obj = {'loggedId': this.props.currentUser, 'profileId': this.props.match.params.id}; 
        this.props.follow(obj); 
    }


    render() {
        let id = this.props.match.params.id; 
        if(Object.keys(this.props.users).length < 2) {
            return null; 
        }
        const profileUser = this.props.users.filter((user) => user._id === id)[0]; 
        const currentUser = this.props.users.filter(user =>user._id === this.props.currentUser.id)[0];
        const buttonText = currentUser.following.includes(profileUser._id) ? "Unfollow" : 'Follow'

        return(
        <div className='profile-container'>

            <section className='profile-top'>
                <p>Hey Best Buddy, {profileUser.username}</p>
            
                <h3>Username: {profileUser.username}</h3>
                <h3> Joined the Team on {profileUser.date.split("T")[0]} </h3>
                <h3> Following {profileUser.following.length} buddies </h3>
                <h3>Height: Just Right</h3>


                <button onClick={this.toggleFollow} className='follow-button' id='follow-button'> {buttonText} </button>

            </section>


            <section className='profile-btm'>
                <div className='profile-bottom-left'>
                    <div> Here's the tea </div>
                    WORKOUTS PREVIEWS GO HERE
                </div>

                <div className='profile-bottom-right'>
                    <div> from the busy bee </div>
                    MEAL PLANS PREVIEWS GO HERE
                </div>
            </section>

        </div>
        )
    };

}

  


export default connect(mSTP, mDTP)(UsersProfile);