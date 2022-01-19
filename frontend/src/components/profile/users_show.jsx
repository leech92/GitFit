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
    // this.changeFollowButton = this.changeFollowButton.bind(this); 
    // setTimeout(() => {this.changeFollowButton(), 500})
  }

  componentDidMount() {
    // this.changeFollowButton(); 
    this.props.fetchUsers(); 
  }

//   changeFollowButton() {
//     //   debugger
//     if (this.props.currentUser.following.includes(this.props.match.params.id)) {
//       // logged in user is already following the profile they are visiting
//       let ele = document.getElementById('follow-button')
//       ele.innerText = 'Unfollow'

//     } else {
//       // user is on a profile they have not followed
//       let ele = document.getElementById('follow-button')
//       ele.innerText = 'Follow'
//     }
//   }

    // changeFollowButton() {
    //     return ((this.props.currentUser.following.includes(this.props.match.params.id)) ? document.getElementById('follow-button').innerText = 'Unfollow' : document.getElementById('follow-button').innerText = 'Follow')
    // }

    toggleFollow(e) {
        // debugger; 
        e.preventDefault(); 
        let obj = {'loggedId': this.props.currentUser, 'profileId': this.props.match.params.id}; 
        this.props.follow(obj); 
        // setTimeout(() => {this.changeFollowButton(), 500})
        // this.changeFollowButton(); 
    }


    render() {
        let id = this.props.match.params.id; 
        if(Object.keys(this.props.users).length < 2) {
            return null; 
        }
        const profileUser = this.props.users.filter((user) => user._id === id)[0]; 
        const currentUser = this.props.users.filter(user =>user._id === this.props.currentUser.id)[0];
        const buttonText = currentUser.following.includes(profileUser._id) ? "Unfollow" : 'Follow'
        // debugger; //Anna
        return(
        <div className='profile-container'>

            <section className='profile-top'>
            
                <h3>Username: {profileUser.username}</h3>


                {/* <h3>Height: {this.props.currentUser.height ? this.props.currentUser.height: 'n/a'}</h3>
                <h3>Weight: {this.props.currentUser.weight ? this.props.currentUser.weight : 'n/a'}</h3> */}

                <button onClick={this.toggleFollow} className='follow-button' id='follow-button'> {buttonText} </button>

            </section>


            <section className='profile-btm'>
                <div>
                    WORKOUTS PREVIEWS GO HERE
                </div>

                <div>
                    MEAL PLANS PREVIEWS GO HERE
                </div>
            </section>
            
        </div>
        )
    };

}

  


export default connect(mSTP, mDTP)(UsersProfile);