import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS, 
    users
})
//action.users => {user, user, users}

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers()
        .then((users) => dispatch(receiveUsers(users)))
); 

export const follow = (object) => dispatch => {
    APIUtil.follow(object['loggedId'], object['profileId']).then(user => dispatch(follow(user)))
}