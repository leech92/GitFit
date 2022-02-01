import React from "react";
import { connect } from "react-redux";
import { generateMealplan, removeMealPlanErrors } from "../../actions/mealplan_actions";
import { closeModal } from "../../actions/modal_actions";
import CreateMealplanForm from './create_mealplan_form'

const mSTP = state => ({
    userId: state.session.user.id,
    errors: state.errors.mealplan
});

const mDTP = dispatch => ({
    generateMealplan: data => dispatch(generateMealplan(data)),
    closeModal: () => dispatch(closeModal()),
    removeMealPlanErrors: () => dispatch(removeMealPlanErrors())
});

export default connect(mSTP, mDTP)(CreateMealplanForm);
