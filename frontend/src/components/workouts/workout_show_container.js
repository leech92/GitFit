import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { fetchWorkout, generateWorkout, fetchUserWorkout } from '../../actions/workout_actions';
import { fetchWorkoutExercises } from '../../actions/exercise_actions';

const mSTP = (state, ownProps) => {

    return {
        workout: state.entities.workouts.specific,
        exercises: state.entities.exercises.some,
        currentUserId: state.session.user.id,
        userWorkouts: state.entities.workouts.user
    };
};

const mDTP = (dispatch) => {

    return {
        fetchWorkout: id => dispatch(fetchWorkout(id)),
        fetchWorkoutExercises: id => dispatch(fetchWorkoutExercises(id)),
        generateWorkout: workout => dispatch(generateWorkout(workout)),
        fetchUserWorkout: id => dispatch(fetchUserWorkout(id))

    };
};

export default connect(mSTP,mDTP)(WorkoutShow);