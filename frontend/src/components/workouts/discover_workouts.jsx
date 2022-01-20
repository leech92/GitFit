import React from 'react';
import '../../stylesheets/discover_workout.css';
import { Link } from 'react-router-dom';

class DiscoverWorkouts extends React.Component {

    componentDidMount() {
        this.props.fetchAllWorkouts();

    }

    render() {
        if (!this.props.workouts.length) return null;

        const workoutItems = this.props.workouts.map((workout, idx) => {
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
                }
                else {
                    photo = "https://gitfit-app-images.s3.amazonaws.com/newarnold.jpg"
                }
                return (<li className = "workout-list-item" key = {`workout-${idx}`}>
                    <Link to = {`/workouts/${workout._id}`}>
                        <img src= {photo} alt= "athlete" className = "workout-image"/>
                    </Link>
                    <span className = "workout-title">{workout.title}</span>
                    <span className='workout-description'>{workout.description}</span>
                </li>)
            
        })

        return (
            <div className = "discover-workout-container">
                {/* "https://gitfit-app-images.s3.amazonaws.com/motivation.mp4" */}
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