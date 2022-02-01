import { getWorkout, getUserWorkout, createWorkout, getAllWorkouts, deleteWorkout } from "../util/workout_api_util";

export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const RECEIVE_USER_WORKOUT = "RECEIVE_USER_WORKOUT";
export const RECEIVE_NEW_WORKOUT = "RECEIVE_NEW_WORKOUT";
export const RECEIVE_ALL_WORKOUTS = "RECEIVE_ALL_WORKOUTS";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT"

const receiveWorkout = workout => {

    return {
        type: RECEIVE_WORKOUT,
        workout
    };
};

const receiveUserWorkout = workouts => {

    return {
        type: RECEIVE_USER_WORKOUT,
        workouts
    };
};

const receiveNewWorkout = workout => {

    return {
        type: RECEIVE_NEW_WORKOUT,
        workout
    };
};

const receiveAllWorkouts = workouts => {
    return {
        type: RECEIVE_ALL_WORKOUTS,
        workouts
    };
};

const removeWorkout = id => {
    debugger
    return {
        type: REMOVE_WORKOUT,
        id
    }
}

export const fetchWorkout = id => dispatch => {

    return getWorkout(id)
        .then(workout => dispatch(receiveWorkout(workout)))
        .catch(error => console.log(error))
}

export const fetchUserWorkout = id => dispatch => {
    
    return getUserWorkout(id)
        .then(workouts => dispatch(receiveUserWorkout(workouts)))
        .catch(error => console.log(error))
};

export const generateWorkout = data => dispatch => {
    
    return createWorkout(data)
        .then(workout => dispatch(receiveNewWorkout(workout)))
        .catch(error => console.log(error))
};

export const fetchAllWorkouts = () => dispatch => {

    return getAllWorkouts()
        .then(workouts => dispatch(receiveAllWorkouts(workouts)))
        .catch(error => console.log(error))
};

export const destroyWorkout = id => dispatch => {
    debugger
    return deleteWorkout(id)
    .then(() => dispatch(removeWorkout(id)))
    .catch(error => console.log(error))
}