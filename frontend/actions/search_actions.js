import { searchQuestions } from './../util/search_questions_api_util';
export const RECEIVE_SEARCH_QUESTIONS = 'RECEIVE_SEARCH_QUESTIONS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

// export const CLEAR_SEARCH = 'CLEAR_SEARCH';


const recieveQuestions = (questions) => ({
    type: RECEIVE_SEARCH_QUESTIONS,
    questions
});

export const clearSearchTerm = () => ({
    type:CLEAR_SEARCH,
})

export const receiveSearchQuestions = (searchTerm) => dispatch => {

  return(  searchQuestions(searchTerm).then(questions => dispatch(recieveQuestions(questions)))
)};

