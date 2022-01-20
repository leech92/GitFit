import { connect } from 'react-redux';
import { fetchAllWorkouts } from '../../actions/workout_actions';
import DiscoverWorkouts from './discover_workouts';

const mSTP = state => {

    return {

    }
};

const mDTP = dispatch => {
    
    return {

    }
};

export default connect(mSTP,mDTP)(DiscoverWorkouts);