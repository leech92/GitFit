import {
    RECEIVE_USERS
} from '../actions/user_actions'

const UsersReducer = (state= {}, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_USERS: 
            return action.users.data; 
        default: 
            return state; 
    }
}

export default UsersReducer; 