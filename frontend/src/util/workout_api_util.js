import axios from 'axios';

export const getWorkout = id => {

    return axios.get(`/api/workouts/${id}`)
};

export const getAllWorkouts = () => {

    return axios.get('/api/workouts/')
}

export const getUserWorkout = id => {
    
    return axios.get(`/api/workouts/users/${id}`)
};

export const createWorkout = data => {

    return axios.post('/api/workouts/')
};