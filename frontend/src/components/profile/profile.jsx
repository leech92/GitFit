import React from 'react';
import "../../stylesheets/profile.css";


class Profile extends React.Component {

  constructor(props){
    super(props)

  toggleFollow(e) {
    e.preventDefault(); 
    let obj = {'loggedId': this.props.currentUser, 'profileId': this.props.match.params.id}; 
    this.props.follow(obj); 
    this.changeFollowButton(); 
  }

  render() {
    let id = this.props.match.params.id; 
    // debugger; //Anna
    return(
      <div className='profile-container'>

        <section className='profile-top'>
          <p>Here's Your Story, Morning Glory</p>
          {/* <h3>Username: {this.props.currentUser.username}</h3>
          <h3>Height: {this.props.currentUser.height ? this.props.currentUser.height: 'n/a'}</h3>
          <h3>Weight: {this.props.currentUser.weight ? this.props.currentUser.weight : 'n/a'}</h3> */}

          {/* <button onClick={this.toggleFollow} className='follow-button' id='follow-button'> Follow </button> */}

        </section>


        <section className='profile-btm'>
          <div className='profile-bottom-left'>
              <div> Don't Shirk Your Work! </div>
              WORKOUTS PREVIEWS GO HERE
          </div>

          <div className='profile-bottom-right'>
            <div> Good Money, Good Honey! </div>
              MEAL PLANS PREVIEWS GO HERE
          </div>
        </section>

      </div>
    )
  };

}

  


export default Profile;