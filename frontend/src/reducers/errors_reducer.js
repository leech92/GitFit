import { combineReducers } from 'redux';

import MealplanErrorsReducer from './mealplan_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    mealplan: MealplanErrorsReducer
});