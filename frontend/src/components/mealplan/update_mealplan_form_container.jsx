import React from "react";
import { connect } from "react-redux";
import { editMealplan } from "../../actions/mealplan_actions";
import { closeModal } from "../../actions/modal_actions";
import UpdateMealplanForm from "./update_mealplan_form";

const mSTP = state => ({
    userId: state.session.user.id,
    mealplan: state.entities.mealplans.specific
})

const mDTP = dispatch => ({
    editMealplan: data => dispatch(editMealplan(data)),
    closeModal: () => dispatch(closeModal())
})

export default connect (mSTP, mDTP)(UpdateMealplanForm)
