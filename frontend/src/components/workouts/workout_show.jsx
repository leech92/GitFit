import React from 'react';
import '../../stylesheets/workout_show.css';

class WorkoutShow extends React.Component {

    constructor(props) {
        super(props)
        
        this.addWorkout = this.addWorkout.bind(this);
    }

    addWorkout() {
        let workout = this.props.workout;
        workout.id = this.props.currentUserId;
        delete workout.user
        delete workout._id
        delete workout.__v

        this.props.generateWorkout(workout).then(() => this.props.history.push('/profile'))
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchWorkout(id);
        this.props.fetchWorkoutExercises(id);
        this.props.fetchUserWorkout(this.props.currentUserId)
    }

    render() {
        if (!this.props.exercises.length) return null;
        let workoutIncluded;
        if (this.props.userWorkouts.length > 0) {
              this.props.userWorkouts.forEach( workout => {
                  
                if (workout.title === this.props.workout.title) {
                    workoutIncluded = true;
                }
            })
        }

        let addWorkout = !workoutIncluded ?  <div className = "workout-show-button-container">
                    <button onClick = {this.addWorkout} className = "add-workout-button">Add Workout</button>
                </div> : null;

        const exerciseItems = this.props.exercises.map( (exercise, idx) => {

            return(
                <li className = "workout-show-item" key = {`exercise-${idx}`}>
                    <img src= {exercise.photoUrl} alt= "exercise" className = "workout-show-image"/>
                    <div className = "exercise-details">
                        <span>{exercise.bodyPart}</span>
                        <span>{exercise.name}</span>
                        <span>{exercise.description}</span>
                        <span>Target Reps: {exercise.targetRep}</span>
                        <span>Sets: {exercise.sets}</span>
                    </div>
                    
                    
                </li>
            )
        })
        return (
            <div className = "workout-show-container">
                <div className = "workout-show-video-container">
                     <video src= "https://gitfit-app-images.s3.amazonaws.com/grind.mp4" autoPlay = {true} loop muted className = "workout-show-video"></video>
                     <span className = "workout-grind">SLEEP.SWEAT.GRIND.REPEAT.</span>
                </div>
                <div className = "workout-show-title">
                    <span>Let's get it, time for some {this.props.workout.title}</span>
                </div>
                <ul className = "workout-show-list">
                    {exerciseItems}
                </ul>
               {addWorkout}
            </div>
        )
    }
}

export default WorkoutShow;