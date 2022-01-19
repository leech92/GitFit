import React from 'react';
import "../../stylesheets/profile.css";


class Profile extends React.Component {

  constructor(props){
    super(props)

    this.toggleFollow = this.toggleFollow.bind(this); 
    this.changeFollowButton = this.changeFollowButton.bind(this); 
    this.findProfile = this.findProfile.bind(this); 
  }

  toggleFollow(e) {
    // debugger; 
    e.preventDefault(); 
    let obj = {'loggedId': this.props.currentUser, 'profileId': this.props.match.params.id}; 
    this.props.follow(obj); 
    this.changeFollowButton(); 
  }
  
  changeFollowButton() {
    // if the the current user is on their own profile 
    if(this.props.currentUser._id === this.props.match.params._id) {
      let ele = document.getElementById('follow-button')
      ele.style.visibility = 'hidden'
    } else if (this.props.currentUser.following.includes(this.props.match.params.id)) {
      // logged in user is already following the profile they are visiting
      let ele = document.getElementById('follow-button')
      ele.innerText = 'Unfollow'
    } else {
      // user is on a profile they have not followed
      let ele = document.getElementById('follow-button')
      ele.innerText = 'Follow'
    }
  }

  // findProfile() {
  //   let profileId = this.props.match.params.id; 
  //   let max = this.props.users.length; 
  //   for(let i = 0; i < max; i++) {
  //     if(this.props.users[i][_id] === profileId) {
  //       const buddy = this.props.users[i]; 
  //       return buddy; 
  //     }
  //   }
  // }

  render() {
    let id = this.props.match.params.id; 
    // debugger; //Anna
    return(
      <div className='profile-container'>

        <section className='profile-top'>
          <p>Here's Your Story, Morning Glory</p>
          <h3>Username: {this.props.currentUser.username}</h3>
          <h3>Height: {this.props.currentUser.height ? this.props.currentUser.height: 'n/a'}</h3>
          <h3>Weight: {this.props.currentUser.weight ? this.props.currentUser.weight : 'n/a'}</h3>

          <button onClick={this.toggleFollow} className='follow-button' id='follow-button'> Follow </button>

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

  


export default Profile;