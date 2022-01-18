import axios from 'axios';

//get mealplan's meals
export const getMealplanMeals = id => {
    return axios.get(`/api/meals/mealplans/${id}`)
};

//create meal
export const createMeal = data => {
    return axios.post('/api/meals/', data)
}