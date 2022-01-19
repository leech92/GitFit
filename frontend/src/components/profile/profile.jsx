import React from 'react';
import "../../stylesheets/profile.css";


class Profile extends React.Component {

  constructor(props){
    super(props)
  }
  // componentDidMount() {
  //   this.props.fetchUserMealplans(this.props.match.params.id);
  // }

  toggleFollow(e){
    e.preventDefault(); 
    let obj = {'loggedId': this.props.currentUser, 'profileId': this.props.match.params.id}; 
    this.props.follow(obj); 
    this.changeFollowButton(); 
  }

  render() {
    // if (!this.props.mealplans.length) return null;

    let id = this.props.match.params.id; 
    return(
      <div className='profile-container'>

        <section className='profile-top'>
          <p>Here's Your Story, Morning Glory</p>

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