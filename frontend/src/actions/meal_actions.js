import { getMealplanMeals, createMeal } from '../util/meal_api_util';

export const RECEIVE_MEALPLAN_MEALS = "RECEIVE_MEALPLAN_MEALS";
export const RECEIVE_NEW_MEAL = "RECEIVE_NEW_MEAL";

const receiveMealplanMeals = meals => ({
    type: RECEIVE_MEALPLAN_MEALS,
    meals
});

const receiveNewMeal = meal => ({
    type: RECEIVE_NEW_MEAL,
    meal
});

export const fetchMealplanMeals = id => dispatch => (
    getMealplanMeals(id)
        .then(meals => dispatch(receiveMealplanMeals(meals)))
        .catch(err => console.log(err))
);

export const generateMeal = data => dispatch => (
    createMeal(data)
        .then(meal => dispatch(receiveNewMeal(meal)))
        .catch(err => console.log(err))
);