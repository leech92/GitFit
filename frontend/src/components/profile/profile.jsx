import React from 'react';
import MealplanPreview from '../mealplan/mealplan_preview';
import "../../stylesheets/profile.css";


class Profile extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserMealplans(this.props.currentUser.id)
  }

  toggleFollow(e){
    e.preventDefault(); 
    let obj = {'loggedId': this.props.currentUser, 'profileId': this.props.match.params.id}; 
    this.props.follow(obj); 
    this.changeFollowButton(); 
  }

  render() {
    if (!this.props.mealplans.length) return null;

    let id = this.props.match.params.id; 
    const { mealplans } = this.props;
    const currentUser = this.props.users.filter(user =>user._id === this.props.currentUser.id)[0];
    return(

      <div className='profile-container'>

        <section className='profile-top'>
          <p>Here's Your Story, Morning Glory</p>
          <h3>Username: {currentUser.username}</h3>
          <h3> Joined the Team on {currentUser.date.split("T")[0]} </h3>
          <h3> Height: {currentUser.height} </h3>
          <h3> Weight: {currentUser.weight} </h3>
          <h3> Following {currentUser.following.length} buddies </h3>

        </section>


        <section className='profile-btm'>
          <div className='profile-bottom-left'>
              <div> Don't Shirk Your Work! </div>
              WORKOUTS PREVIEWS GO HERE
          </div>

          <div className='profile-bottom-right'>
            <div> Good Money, Good Honey! </div>
            <MealplanPreview mealplans={mealplans}/>
          </div>
        </section>

      </div>
    )
  };

}

  


export default Profile;