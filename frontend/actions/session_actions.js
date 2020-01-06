import * as APIUtil from "./../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = err => ({
  type: RECEIVE_SESSION_ERRORS,
  err
});

export const signup = user => dispatch =>
  APIUtil.signup(user).then(
    response => dispatch(receiveCurrentUser(response)),
    err => dispatch(receiveErrors(err))
  );

export const login = user => dispatch =>
  APIUtil.login(user).then(response => dispatch(receiveCurrentUser(response)));

export const logout = () => dispatch =>
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()));
