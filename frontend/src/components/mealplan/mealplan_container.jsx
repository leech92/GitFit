import { connect } from 'react-redux';
import { fetchMealplan } from '../../actions/mealplan_actions';
import Mealplan from './mealplan';

const mSTP = state => {
    return {
        mealplan: state.entities.specific
    };
};

const mDTP = dispatch => {
    return {
        fetchMealplan: id => dispatch(fetchMealplan(id))
    };
};

export default connect(mSTP, mDTP)(Mealplan);