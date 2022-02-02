import { RECEIVE_MEALPLAN, 
         RECEIVE_USER_MEALPLANS, 
         RECEIVE_NEW_MEALPLAN,
         REMOVE_MEALPLAN,
         RECEIVE_ALL_MEALPLANS
        } from "../actions/mealplan_actions";

const MealplansReducer = (state = { specific: {}, user: [], new: {}, all: {} }, action) => {
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
            newState.user.push(action.mealplan.data);
            return newState;
        case REMOVE_MEALPLAN:
            delete newState.user[action.id]
            return newState;
        case RECEIVE_ALL_MEALPLANS:
            newState.all = action.mealplans.data
            return newState;
        default:
            return state;
    }
};

export default MealplansReducer;