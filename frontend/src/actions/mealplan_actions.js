import { getMealplan, 
         getUserMealplans, 
         createMealplan,
         updateMealplan,
         deleteMealplan
        } from '../util/mealplan_api_util';

export const RECEIVE_MEALPLAN = "RECEIVE_MEALPLAN";
export const RECEIVE_USER_MEALPLANS = "RECEIVE_USER_MEALPLANS";
export const RECEIVE_NEW_MEALPLAN = "RECEIVE_NEW_MEALPLAN";
export const UPDATE_MEALPLAN = "UPDATE_MEALPLAN";
export const REMOVE_MEALPLAN = "REMOVE_MEALPLAN"

const receiveMealplan = mealplan => ({
    type: RECEIVE_MEALPLAN,
    mealplan
});

const receiveUserMealplans = mealplans => ({
    type: RECEIVE_USER_MEALPLANS,
    mealplans
});

const receiveNewMealplan = mealplan => ({
    type: RECEIVE_NEW_MEALPLAN,
    mealplan
});

const receiveUpdatedMealplan = mealplan => ({
    type: UPDATE_MEALPLAN,
    mealplan
})

const removeMealplan = id => ({
    type: REMOVE_MEALPLAN,
    id
})

export const fetchMealplan = id => dispatch => (
    getMealplan(id)
        .then(mealplan => dispatch(receiveMealplan(mealplan)))
        .catch(err => console.log(err))
);

export const fetchUserMealplans = id => dispatch => (
    getUserMealplans(id)
        .then(mealplans => dispatch(receiveUserMealplans(mealplans)))
        .catch(err => console.log(err))
);

export const generateMealplan = data => dispatch => (
    createMealplan(data)
        .then(mealplan => dispatch(receiveNewMealplan(mealplan)))
        .catch(err => console.log(err))
);

export const editMealplan = data => dispatch => (
    updateMealplan(data)
        .then(mealplan => dispatch(receiveUpdatedMealplan(mealplan)))
        .catch(err => console.log(err))
);

export const destroyMealplan = id => dispatch => (
    deleteMealplan(id)
        .then(() => dispatch(removeMealplan(id)))
        .catch(err => console.log(err))
);