import { connect } from 'react-redux';
import { fetchMealplan } from '../../actions/mealplan_actions';
import { fetchMealplanMeals } from '../../actions/meal_actions';
import Mealplan from './mealplan';

const mSTP = state => {
    return {
        mealplan: state.entities.mealplans.specific,
        meals: state.entities.meals.all
    };
};

const mDTP = dispatch => {
    return {
        fetchMealplan: id => dispatch(fetchMealplan(id)),
        fetchMealplanMeals: id => dispatch(fetchMealplanMeals(id))
    };
};

export default connect(mSTP, mDTP)(Mealplan);