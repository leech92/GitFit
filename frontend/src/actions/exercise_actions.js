import { getAllExercises, getExercise, getWorkoutExercises } from "../util/exercise_api_util";

export const RECEIVE_ALL_EXERCISES = "RECEIVE_ALL_EXERCISES";
export const RECEIVE_WORKOUT_EXERCISES = "RECEIVE_WORKOUT_EXERCISES";

const receiveAllExercises = (exercises) => {

    return {
        type: RECEIVE_ALL_EXERCISES,
        exercises
    };
};

const receiveWorkoutExercises = (exercises) => {

    return {
        type: RECEIVE_WORKOUT_EXERCISES,
        exercises
    };
};

export const fetchAllExercises = () => dispatch => {

    return getAllExercises()
        .then(exercises => dispatch(receiveAllExercises(exercises)))
        .catch(error => console.log(error))
};

export const fetchWorkoutExercises = () => dispatch => {

    return getWorkoutExercises(id)
        .then(exercises => dispatch(receiveWorkoutExercises(exercises)))
        .catch(error => console.log(error))
};