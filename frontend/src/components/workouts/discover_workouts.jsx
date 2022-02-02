import React from 'react';
import '../../stylesheets/discover_workout.css';
import { Link } from 'react-router-dom';

class DiscoverWorkouts extends React.Component {

    componentDidMount() {
        this.props.fetchAllWorkouts();
    }

    render() {
        if (!this.props.workouts.length) return null;

        let uniqueWorkouts = [];
        let titles = [];

        for (let i = 0; i < this.props.workouts.length ;i++) {
            if (!titles.includes(this.props.workouts[i].title)) {
                titles.push(this.props.workouts[i].title);
                uniqueWorkouts.push(this.props.workouts[i]);
            }
        }
       

        const workoutItems = uniqueWorkouts.map((workout, idx) => {
       
                return (<li className = "workout-list-item" key = {`workout-${idx}`}>
                    <Link to = {`/workouts/${workout._id}`}>
                        <img src= {workout.photo} alt= "athlete" className = "workout-image"/>
                    </Link>
                    <span className = "workout-title">{workout.title}</span>
                    <span className='workout-description'>{workout.description}</span>
                </li>)
            
        })

        return (
            <div className = "discover-workout-container">
                <div className = "workout-video-container">
                    <video src= "https://gitfit-app-images.s3.amazonaws.com/motivation.mp4" autoPlay = {true} loop muted className = "workout-banner"></video>
                    <div className = "workout-motivation">
                        <span className = "workout-message">“Just like in bodybuilding, failure is also a necessary experience for growth in our own lives, for if we’re never tested to our limits, how will we know how strong we really are? How will we ever grow?”</span>
                        <span className = "workout-author">– Arnold Schwarzenegger</span>
                    </div>
                </div>

                <ul className = "workout-list">
                    {workoutItems}
                </ul>
            </div>
        )
    }
}

export default DiscoverWorkouts