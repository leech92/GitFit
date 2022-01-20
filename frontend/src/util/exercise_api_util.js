import axios from 'axios';

export const getAllExercises = () => {

    return axios.get('/api/exercises/')
};

export const getWorkoutExercises = id => {

    return axios.get(`/api/exercises/workouts/${id}`)
}

export const getExerise = id => {

    return axios.get(`/api/exercises/${id}`)
};