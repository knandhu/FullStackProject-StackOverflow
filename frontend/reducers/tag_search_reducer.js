import {
  RECEIVE_TAG_QUESTIONS,
  CLEAR_TAG_SEARCH
} from "./../actions/question_actions";

const tagsearchReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
      case RECEIVE_TAG_QUESTIONS:
      // return Object.assign( oldState, action.questions);
      return action.questions;

    case CLEAR_TAG_SEARCH:
      // let nextState = Object.assign({}, oldState);
      // nextState.entities.search = [];
      return [];

    default:
      return oldState;
  }
};

export default tagsearchReducer;
