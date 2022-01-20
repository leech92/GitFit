import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};

export const logout = () => {
    return axios.delete('/api/session')
}

export const fetchUsers = () => {
    return axios.get(`api/users`); 
}

export const follow = (loggedId, profileId) => {
    return axios.patch(`/api/users/${loggedId}`, {"profileId" : profileId })
}

