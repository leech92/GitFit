import { combineReducers } from "redux";
import MealplansReducer from "./mealplan_reducer";
import MealsReducer from "./meal_reducer";
import UsersReducer from "./users_reducer";
import WorkoutReducer from "./workout_reducer";
import ExerciseReducer from "./exercise_reducer";

const EntitiesReducer = combineReducers({
    mealplans: MealplansReducer,
    meals: MealsReducer, 
    users: UsersReducer,
    workouts: WorkoutReducer,
    exercises: ExerciseReducer 
});

export default EntitiesReducer;