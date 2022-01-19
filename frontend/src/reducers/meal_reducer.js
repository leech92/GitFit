import { RECEIVE_MEALPLAN_MEALS, RECEIVE_NEW_MEAL } from "../actions/meal_actions";

const MealsReducer = (state = { all: [], new: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_MEALPLAN_MEALS:
            newState.all = action.meals.data;
            return newState;
        case RECEIVE_NEW_MEAL:
            newState.new = action.meal.data;
            return newState;
        default:
            return state;
    }
};

export default MealsReducer;