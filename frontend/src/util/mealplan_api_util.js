import axios from 'axios';

//get specific mealplan show page
export const getMealplan = id => {
    return axios.get(`/api/mealplans/${id}`)
}

//get user's mealplans
export const getUserMealplans = id => {
    return axios.get(`/api/mealplans/users/${id}`)
};

//create mealplans
export const createMealplan = data => {
    return axios.post('/api/mealplans/', data)
};

//update mealplans
export const updateMealplan = data => {
    return axios.patch(`/api/mealplans/${data.user}`, data)
};

//delete mealplans
export const deleteMealplan = id => {
    return axios.delete(`/api/mealplans/${id}`)
}