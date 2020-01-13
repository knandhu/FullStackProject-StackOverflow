import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import questionErrorsReducers from './question_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  question: questionErrorsReducers
});

export default errorsReducer;
