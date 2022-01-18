import { RECEIVE_MEALPLAN, RECEIVE_USER_MEALPLANS, RECEIVE_NEW_MEALPLAN } from "../actions/mealplan_actions";

const MealplansReducer = (state = { specific: undefined, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_MEALPLAN:
            newState.specific = action.mealplan.data
            return newState
        case RECEIVE_USER_MEALPLANS:
            newState.user = action.mealplans.data;
            return newState;
        case RECEIVE_NEW_MEALPLAN:
            newState.new = action.mealplan.data;
            return newState;
        default:
            return state;
    }
};

export default MealplansReducer;