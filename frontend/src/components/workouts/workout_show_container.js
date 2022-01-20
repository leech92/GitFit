import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { fetchWorkout } from '../../actions/workout_actions';
import { fetchWorkoutExercises } from '../../actions/exercise_actions';

const mSTP = (state, ownProps) => {
    // debugger
    return {
        workout: state.entities.workouts.specific,
        exercises: state.entities.exercises.some
    };
};

const mDTP = (dispatch) => {

    return {
        fetchWorkout: id => dispatch(fetchWorkout(id)),
        fetchWorkoutExercises: id => dispatch(fetchWorkoutExercises(id))
    };
};

export default connect(mSTP,mDTP)(WorkoutShow);