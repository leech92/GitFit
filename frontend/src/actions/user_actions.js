import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = "RECIEVE_USER"

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS, 
    users
})

export const recieveUser = user => ({
    type: RECEIVE_USER,
    user
})
//action.users => {user, user, users}

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers()
        .then((users) => dispatch(receiveUsers(users)))
); 

// export const follow = (object) => dispatch => (
//     APIUtil.follow(object['loggedId'], object['profileId'])
//         .then(object => {
//             dispatch(follow(object['loggedId'], object['profileId']))})
// )

export const follow = (object) => dispatch => (
    APIUtil.follow(object['loggedId'], object['profileId'])
        .then(object => {
            dispatch(recieveUser(object))
        })
)