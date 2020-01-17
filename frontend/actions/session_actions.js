import * as APIUtil from "./../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveallUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = err => ({
  type: RECEIVE_SESSION_ERRORS,
  err
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const signup = user => dispatch =>
         APIUtil.signup(user).then(
           response => dispatch(receiveCurrentUser(response)),
           err => dispatch(receiveErrors(err.responseJSON))
         );

export const login = user => dispatch => {
  return (APIUtil.login(user).then(
    response => dispatch(receiveCurrentUser(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  ));
};

export const logout = () => dispatch =>
         APIUtil.logout().then(
           () => dispatch(logoutCurrentUser()),
           err => dispatch(receiveErrors(err.responseJSON))
         );


export const allUsers = () => dispatch => (
  APIUtil.allusers()
  .then((users) => dispatch(receiveallUsers(users)))
    // .then((users) => console.log(users))
);