import { RECEIVE_ALL_WORKOUTS, RECEIVE_WORKOUT, 
    RECEIVE_USER_WORKOUT,RECEIVE_NEW_WORKOUT,
    REMOVE_WORKOUT} from "../actions/workout_actions";

const WorkoutReducer = (state = { specific: {}, user: {}, new: {}, all: {} },action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_WORKOUT:
            newState.specific = action.workout.data;
            return newState;


        case RECEIVE_USER_WORKOUT: 

        case RECEIVE_USER_WORKOUT:

            newState.user = action.workouts.data;
            return newState;
        case RECEIVE_NEW_WORKOUT:
            newState.new = action.workout.data;
            return newState;

        case RECEIVE_ALL_WORKOUTS:
            newState.all = action.workouts.data;
            return newState;
        
        case REMOVE_WORKOUT:
            // delete newState.user[action.id];
            for (let i = 0; i < newState.user.length; i++) {
                if (newState.user[i]._id === action.id) {
                    newState.user.splice(i,i);
                    break;
                }
            }
            return newState;
        default:
            return state;
    };
};

export default WorkoutReducer;