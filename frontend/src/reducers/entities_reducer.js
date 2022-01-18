import { combineReducers } from "redux";
import MealplansReducer from "./mealplan_reducer";
import MealsReducer from "./meal_reducer";

const EntitiesReducer = combineReducers({
    mealplans: MealplansReducer,
    meals: MealsReducer
});

export default EntitiesReducer;