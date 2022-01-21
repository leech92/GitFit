import React from 'react';
import MealplanPreview from '../mealplan/mealplan_preview';
import "../../stylesheets/profile.css";
import { Link } from 'react-router-dom';


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
      let photo;
                if (workout.title === "Chest") {
                    photo = "https://gitfit-app-images.s3.amazonaws.com/superman.jpg"
                } else if (workout.title === "Triceps") {
                    photo = "https://gitfit-app-images.s3.amazonaws.com/the-rock.jpg"
                } else if (workout.title === "Back") {
                    photo = "https://gitfit-app-images.s3.amazonaws.com/back-pullup.jpg"
                } else if (workout.title === "Shoulders") {
                    photo = "https://gitfit-app-images.s3.amazonaws.com/brolic.jpg"
                } else if (workout.title === "Legs") {
                    photo = "https://gitfit-app-images.s3.amazonaws.com/legs.jpg"
                } else if (workout.title.includes("Abs")) {
                    photo = "https://gitfit-app-images.s3.amazonaws.com/summer-bod.jpg"
                }
                else {
                    photo = "https://gitfit-app-images.s3.amazonaws.com/newarnold.jpg"
                }
      let workoutUrl;

     for (let i = 0; i < this.props.allWorkouts.length; i++) {
       if (this.props.allWorkouts[i].title === workout.title) {
         workoutUrl = this.props.allWorkouts[i]._id;
         break;
       }
     }

      return (
        <li className = "profile-workout-item" key = {`workout-${idx}`}> <Link to = {`/workouts/${workoutUrl}`}>
              <img src= {photo} alt= "workoutphoto" className = "profile-workout-pic" />
        </Link>
          <span className = "profile-workout-title">{workout.title}</span>
          <br />
          <span className = "profile-workout-description">{workout.description}</span>
          <br />
          <button className = "delete-workout-button">Delete Workout</button>
        </li>
      )
    }) : <Link to = "/discoverWorkouts"><div>Check out some workouts!</div></Link>
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
          <div className='profile-bottom-top'>

              <span className = "profile-myworkouts">My Workouts</span>
              <ul className= 'profile-workout-list'>

                {userWorkouts}
              </ul>
          </div>

          <div className='profile-bottom-bottom'>
            <div> Good Money, Good Honey! </div>
            <button className='create-button' onClick={() => this.props.openModal('create mealplan')}>Create Meal Plan</button>
            <MealplanPreview mealplans={mealplans} openModal={this.props.openModal}/>
          </div>
        </section>

      </div>
    )
  };

}

  


export default Profile;