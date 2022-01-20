import { RECEIVE_ALL_EXERCISES, RECEIVE_WORKOUT_EXERCISES } from "../actions/exercise_actions";

const ExerciseReducer = (state = { all: {}, some: {} }, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_EXERCISES:
            newState.all = action.exercises.data;
            return newState;

        case RECEIVE_WORKOUT_EXERCISES:
            
            newState.some = action.exercises.data;
            return newState;

        default:
            return state;
    };
};

export default ExerciseReducer;