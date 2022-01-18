import axios from 'axios';

//get specific mealplan show page
export const getMealplan = id => {
    return axios.get(`/api/tweets/${id}`)
}

//get user's mealplans
export const getUserMealplans = id => {
    return axios.get(`/api/mealplans/users/${id}`)
};

//create mealplans
export const createMealplan = data => {
    return axios.post('/api/mealplans/', data)
};