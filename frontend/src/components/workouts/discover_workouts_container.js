import { connect } from 'react-redux';
import { fetchAllWorkouts } from '../../actions/workout_actions';
import DiscoverWorkouts from './discover_workouts';

const mSTP = state => {
    
    return {
        workouts: state.entities.workouts.all
    }
};

const mDTP = dispatch => {
    
    return {
        fetchAllWorkouts: () => dispatch(fetchAllWorkouts())
    }
};

export default connect(mSTP,mDTP)(DiscoverWorkouts);