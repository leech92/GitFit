import React from "react";
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal)
});

function Modal({modal, closeModal}) {
    if (!modal) {
        return null
    }

    let component;
    switch (modal) {
        case 'create mealplan':
            // component = <CreateMealplanForm/>
            break;
        case 'update mealplan':
            // component = <UpdateMealplanForm/>
            break;
        case 'create meal':
            // component = <CreateMealForm/>
            break;
        case 'update meal':
            // component = <UpdateMealForm/>
            break;
        default:
            return null;    
    }

    return (
        <div className="modal-container" onClick={closeModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

export default connect(mSTP, mDTP)(Modal);