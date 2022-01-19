import React from 'react';
import "../../stylesheets/profile.css";


class Profile extends React.Component {

  constructor(props){
    super(props)
  }
  
  render() {
    return(
      <div className='profile-container'>
        <section className='profile-top'>
          <h3>Username: {this.props.currentUser.username}</h3>
          <h3>Height: {this.props.currentUser.height ? this.props.currentUser.height: 'n/a'}</h3>
          <h3>Weight: {this.props.currentUser.weight ? this.props.currentUser.weight : 'n/a'}</h3>
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