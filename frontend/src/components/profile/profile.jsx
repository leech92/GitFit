import React from 'react';
import MealplanPreview from '../mealplan/mealplan_preview';
import "../../stylesheets/profile.css";


class Profile extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserMealplans(this.props.currentUser.id);
    this.props.fetchUsers();
    this.props.fetchUserWorkout(this.props.currentUser.id)
  }

  render() {

    if (!this.props.users.length) return null;
    let id = this.props.match.params.id; 
    const { mealplans } = this.props;
    const currentUser = this.props.users.filter(user =>user._id === this.props.currentUser.id)[0];
    let userWorkouts = this.props.workouts.length ? this.props.workouts.map((workout,idx) => {
      return (
        <li>
          <span>{workout.title}</span>
          <br />
          <span>{workout.description}</span>
        </li>
      )
    }) : <div>Check out some workouts!</div>
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
              <ul>
                {userWorkouts}
              </ul>
          </div>

          <div className='profile-bottom-right'>
            <div> Good Money, Good Honey! </div>
            <button onClick={() => this.props.openModal('create mealplan')}>Create Meal Plan</button>
            <MealplanPreview mealplans={mealplans} openModal={this.props.openModal}/>
          </div>
        </section>

      </div>
    )
  };

}

  


export default Profile;