import { fetchUsers } from "./../util/users_api_util";
export const RECEIVE_USERS = "RECEIVE_USERS";
// export const CLEAR_SEARCH = "CLEAR_SEARCH";

const recieveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

// export const clearSearchTerm = () => ({
//   type: CLEAR_SEARCH
// });

export const receiveUsers = () => dispatch => {
  return fetchUsers().then(users => dispatch(recieveUsers(users)));
};
