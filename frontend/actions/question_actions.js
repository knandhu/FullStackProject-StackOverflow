import * as QuestionAPIUtil from "./../util/question_api_util";
import QuestionsIndex from "../components/questions/questions_index";
import QuestionDetailForm from "../components/questions/question_detail_form";
import { createHistory } from "history";
import { searchQuestions } from "./../util/search_questions_api_util";

export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";
export const CLEAR_QUESTION_ERRORS = "CLEAR_QUESTION_ERRORS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const RECEIVE_TAG_QUESTIONS = "RECEIVE_TAG_QUESTIONS";
export const CLEAR_TAG_SEARCH = "CLEAR_TAG_SEARCH";

const fetchAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
});

const receiveQErrors = err => ({
  type: RECEIVE_QUESTION_ERRORS,
  err
});

export const clearErrors = () => ({
  type: CLEAR_QUESTION_ERRORS
});

export const fetchQuestions = () => dispatch => {
  return (
    QuestionAPIUtil.fetchQuestions()
      .then(questions => dispatch(fetchAllQuestions(questions)))
  );
};

// export const fetchTagQuestions = (tag) => dispatch => {
//     return (
//         QuestionAPIUtil.fetchTagQuestions(tag).then((questions) => {
//             console.log(questions)
//         })
//     )
// };

export const fetchQuestion = questionId => dispatch => {
  return QuestionAPIUtil.fetchQuestion(questionId).then(question =>
    dispatch(receiveQuestion(question))
  );
};
export const createQuestion = question => dispatch => {
  return QuestionAPIUtil.createQuestion(question).then(
    question => dispatch(receiveQuestion(question)),
    err => dispatch(receiveQErrors(err.responseJSON))
  );
};

export const updateQuestion = question => dispatch => {
  return QuestionAPIUtil.updateQuestion(question).then(question =>
    dispatch(receiveQuestion(question))
  );
};

export const deleteQuestion = question => dispatch => {
  return QuestionAPIUtil.deleteQuestion(question).then(() =>
    dispatch(removeQuestion(question))
  );
};

const recieveTagQuestions = questions => {
  return {
    type: RECEIVE_TAG_QUESTIONS,
    questions
  };
};

export const clearTagSearchTerm = () => ({
  type: CLEAR_TAG_SEARCH
});

export const receiveTagSearchQuestions = tag => dispatch => {
  return QuestionAPIUtil.fetchTagQuestions(tag).then(questions =>
    dispatch(recieveTagQuestions(questions))
  );
};
