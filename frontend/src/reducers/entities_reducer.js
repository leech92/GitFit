import { combineReducers } from "redux";
import MealplansReducer from "./mealplan_reducer";
import MealsReducer from "./meal_reducer";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
    mealplans: MealplansReducer,
    meals: MealsReducer, 
    users: UsersReducer, 
});

export default EntitiesReducer;