import {
    RECEIVE_USERS, RECEIVE_USER
} from '../actions/user_actions'

const UsersReducer = (state= {}, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_USERS: 
            return action.users.data; 
        case RECEIVE_USER:
            // return Object.assign({}, state, { [action.user.data._id]: action.user.data})
            const nextState = Object.assign([], state);
            let idx = null;
            for (let index in nextState) {
                let user = nextState[index]
                if (user._id === action.user.data._id) {
                    idx = index;
                }
            }
            nextState.splice(idx, 1);
            nextState.push(action.user.data);
            return nextState
        default: 
            return state; 
    }
}

export default UsersReducer; 