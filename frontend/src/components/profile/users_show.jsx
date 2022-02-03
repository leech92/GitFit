import React from 'react';
import "../../stylesheets/profile.css";
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { follow, fetchUsers } from '../../actions/user_actions'
import { fetchUserMealplans } from '../../actions/mealplan_actions';
import MealplanPreview from '../mealplan/mealplan_preview';
import { fetchUserWorkout } from '../../actions/workout_actions';
import { Link } from 'react-router-dom';

const mSTP = (state) => {
  return {
    currentUser: state.session.user, 
    users: state.entities.users, 
    // buddy: state.entities.users[.match.params.id]
    mealplans: state.entities.mealplans.user,
    workouts: state.entities.workouts.user
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()), 
  follow: (obj) => dispatch(follow(obj)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUserMealplans: id => dispatch(fetchUserMealplans(id)),
  fetchUserWorkout: id => dispatch(fetchUserWorkout(id))
});


class UsersProfile extends React.Component {

    constructor(props){
        super(props)
        this.toggleFollow = this.toggleFollow.bind(this); 
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchUserMealplans(this.props.match.params.id)
        this.props.fetchUserWorkout(this.props.match.params.id)
    
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchUserMealplans(this.props.match.params.id)
            this.props.fetchUserWorkout(this.props.match.params.id)
        }
    }

    toggleFollow(e) {
        e.preventDefault(); 
        let obj = {'loggedId': this.props.currentUser.id, 'profileId': this.props.match.params.id};
        // I am able to find the current logged in user and push to the following array, but I am not finding the currentProfileUser correctly and am pushing null to the follow array
        this.props.follow(obj); 
    }

    render() {
        let id = this.props.match.params.id; 
        if(Object.keys(this.props.users).length < 2) {
            return null; 
        }
        const profileUser = this.props.users.filter((user) => user._id === id)[0]; 
        const currentUser = this.props.users.filter(user =>user._id === this.props.currentUser.id)[0];
        const buttonText = currentUser.following.includes(profileUser._id) ? "Unfollow" : 'Follow'


        const { mealplans } = this.props;
        
        
        let listWorkouts = !this.props.workouts.length ? 
        <Link to = "/discoverWorkouts">
            <div>Discover Workouts!</div> 
        </Link> :
        this.props.workouts.map((workout,idx) => {

            return (
                <li key = {`workout-${idx}`} className = "profile-workout-item">   
                    <Link to = {`/workouts/${workout._id}`}>
                        <img src= {workout.photo} alt= "user-show" className = "profile-workout-pic"/>
                    </Link>
                    <span className = "profile-workout-title">{workout.title}</span>   
                    <br />
                </li>
                  )
            })

        return(
        <div className='profile-container'>
            <section className='profile-top'>

                <div className='profile-top-left'> 
                    <img src={profileUser.photo} alt="profile-photo" height='125' width='auto'/>
                </div>

                <div className='profile-top-right'> 
                    <p>Hey Best Buddy, {profileUser.username}</p>
                    <h3>Username: {profileUser.username}</h3>
                    <h3> Joined the Team on {profileUser.date.split("T")[0]} </h3>
                    <h3> Following {profileUser.following.length} buddies </h3>
                    <h3>Height: Just Right</h3>
                </div>

                <button onClick={this.toggleFollow} className='follow-button' id='follow-button'> {buttonText} </button>

            </section>


            <section className='profile-btm'>
                <div className='profile-bottom-top'>
                    <div className = "checkout-workout"> Check out how {profileUser.username} is working out </div>
                    <ul className='profile-workout-list'>
                        {listWorkouts}
                    </ul>
                </div>

                <div className='profile-bottom-bottom'>
                    <div> from the busy bee </div>
                    <MealplanPreview mealplans={mealplans}/>
                </div>
            </section>

        </div>
        )
    };

}

  


export default connect(mSTP, mDTP)(UsersProfile);