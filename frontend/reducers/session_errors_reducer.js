import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from "../actions/session_actions";
import { RECEIVE_QUESTION_ERRORS } from "../actions/question_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.err;
    
    case CLEAR_SESSION_ERRORS:
      return [];
    
    default:
      return state;
  }
};

export default sessionErrorsReducer;
