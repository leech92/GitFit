import React from 'react';
import "../../stylesheets/profile.css";


class Profile extends React.Component {

  constructor(props){
    super(props)

    this.toggleFollow = this.toggleFollow.bind(this); 
  }

  componentDidMount() {
    this.props.fetchUserMealplans(this.props.match.params.id);
  }

  toggleFollow(e) {
    // debugger; 
    e.preventDefault(); 
    let obj = {'loggedId': this.props.currentUser, 'profileId': this.props.match.params.id}; 
    this.props.follow(obj); 
  }
  
  render() {
    // if (!this.props.mealplans.length) return null;

    let id = this.props.match.params.id; 
    
    return(
      <div className='profile-container'>
        <section className='profile-top'>
          <h3>Username: {this.props.currentUser.username}</h3>
          <h3>Height: {this.props.currentUser.height ? this.props.currentUser.height: 'n/a'}</h3>
          <h3>Weight: {this.props.currentUser.weight ? this.props.currentUser.weight : 'n/a'}</h3>
          <button onClick={this.toggleFollow}> Follow </button>
        </section>


        <section className='profile-btm'>
          <div>
            WORKOUTS PREVIEWS GO HERE
          </div>

          <div>
            MEAL PLANS PREVIEWS GO HERE
          </div>
        </section>

        {/* <button onClick={this.toggleFollow}> Follow </button> */}
      </div>
    )
  };

}

  


export default Profile;