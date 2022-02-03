import React from 'react';
import MealplanPreview from '../mealplan/mealplan_preview';
import "../../stylesheets/profile.css";
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'

class Profile extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserMealplans(this.props.currentUser.id);
    this.props.fetchUsers();
    this.props.fetchUserWorkout(this.props.currentUser.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.newMealplan !== prevProps.newMealplan) {
      this.props.fetchUserMealplans(this.props.currentUser.id);
    }
  }

  render() {
    if (!this.props.users.length) return null;
    
    let id = this.props.match.params.id; 
    const { mealplans, newMealplan, destroyWorkout } = this.props;
    const currentUser = this.props.users.filter(user =>user._id === this.props.currentUser.id)[0];

    let userWorkouts = this.props.workouts.length ? this.props.workouts.map((workout,idx) => {
  
    let workoutUrl;

     for (let i = 0; i < this.props.allWorkouts.length; i++) {
       if (this.props.allWorkouts[i].title === workout.title) {
         workoutUrl = this.props.allWorkouts[i]._id;
         break;
       }
     }

      return (
        <li className = "profile-workout-item" key = {`workout-${idx}`}> <Link to = {`/workouts/${workoutUrl}`}>
              <img src= {workout.photo} alt= "workoutphoto" className = "profile-workout-pic" />
        </Link>
          <span className = "profile-workout-title">{workout.title}</span>
          <br />
          <FaTrash className = "delete-workout-button" onClick = {() => destroyWorkout(workout._id).then(() => this.props.fetchUserWorkout(this.props.currentUser.id))}/>
        </li>
      )
    }) : <Link to = "/discoverWorkouts"><div>Check out some workouts!</div></Link>
    return(

      <div className='profile-container'>

        <section className='profile-top'>
          <img src={currentUser.photo} alt="user-pic" className='user-profile-pic'/>
          
          <div className = "user-profile-info">
            <p>Here's Your Story, Morning Glory</p>
            <h3>Username: {currentUser.username}</h3>
            <h3> Joined the Team on {currentUser.date.split("T")[0]} </h3>
            <h3> Height: {currentUser.height} </h3>
            <h3> Weight: {currentUser.weight} </h3>
            <h3> Following {currentUser.following.length} buddies </h3>
          </div>
        

        </section>


        <section className='profile-btm'>
          <div className='profile-bottom-top'>

              <span className = "profile-myworkouts">My Workouts</span>

              <div className = "profile-workout-list-container">
                <ul className= 'profile-workout-list'>
                  {userWorkouts}
                </ul>
              </div>
             
          </div>

          <div className='profile-bottom-bottom'>
            <button className='create-button' onClick={() => this.props.openModal('create mealplan')}>Create Meal Plan</button>
            <MealplanPreview mealplans={mealplans} openModal={this.props.openModal}/>
          </div>
        </section>

      </div>
    )
  };

}

  


export default Profile;