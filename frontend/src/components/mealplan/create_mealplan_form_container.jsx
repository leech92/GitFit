import React from "react";
import { connect } from "react-redux";
import { generateMealplan } from "../../actions/mealplan_actions";
import { closeModal } from "../../actions/modal_actions";
import CreateMealplanForm from './create_mealplan_form'

const mSTP = state => ({
    userId: state.session.user.id
});

const mDTP = dispatch => ({
    generateMealplan: data => dispatch(generateMealplan(data)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(CreateMealplanForm);