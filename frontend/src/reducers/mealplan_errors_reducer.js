import { RECEIVE_NEW_MEALPLAN, UPDATE_MEALPLAN, RECEIVE_MEALPLAN_ERRORS, REMOVE_MEALPLAN_ERRORS } from "../actions/mealplan_actions"

const MealplanErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_NEW_MEALPLAN:
            return [];
        case UPDATE_MEALPLAN:
            return [];
        case RECEIVE_MEALPLAN_ERRORS:
            return action.errors;
        case REMOVE_MEALPLAN_ERRORS:
            return [];
        default:
            return state;
    }
}

export default MealplanErrorsReducer;