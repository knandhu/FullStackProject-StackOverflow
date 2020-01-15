import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import questionsReducer from "./questions_reducer";
import answersReducer from './answers_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  answers: answersReducer,
  search: searchReducer
});

export default entitiesReducer;
