import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        if (!isSignup) {
            // url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBdHVdiAhum7t4UG8c0fHGT-PXUwKvurK4';
            console.log('isSignup = false!!!!');
        }

        axios.get('users.json').then(response => {
            let fetchedUsers = [];
            for (let user of response.data.data) {
                fetchedUsers.push(user);
            }
            
            // Front-end Authentication (not secure at all; should technically happen in the backend):
            // search for email -> found? nextStep: dispatch authFailure 
            let foundFlag = false;
            for (let user of fetchedUsers) {
                // console.log('email is ' + user.email);
                // console.log('password is ' + user.password);
                if (user.email === authData.email) {
                    foundFlag = true;
                    // compare password -> correct? authSuccess: authFailure
                    if (user.password !== authData.password){
                        return dispatch(authFail('Invalid email/password combination!'));
                    } else {
                        // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                        localStorage.setItem('token', 'FAKE TOKEN');
                        localStorage.setItem('expirationDate', expirationDate);
                        localStorage.setItem('userId', 'FAKE USERID');
                        localStorage.setItem('userName', user.email);
                        // dispatch(authSuccess(response.data.idToken, response.data.localId));
                        dispatch(authSuccess('FAKE TOKEN', 'FAKE USERID'));
                        dispatch(checkAuthTimeout(3600));
                    }
                }
            }
            if (!foundFlag) {
                return dispatch(authFail('User not found!'));
            }

        });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};