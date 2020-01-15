import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from './../actions/question_actions';
import { RECEIVE_SESSION_ERRORS } from './../actions/session_actions';

const questionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState;
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return Object.assign({}, oldState, action.questions);

        case RECEIVE_QUESTION:
            nextState = Object.assign({}, oldState);
            nextState[action.question.id] = action.question;
            nextState[action.question.id].answers = action.question.answers.slice(0)
            return nextState;
        
        case REMOVE_QUESTION:
            nextState = Object.assign({}, oldState);
            delete nextState[action.question.id];
            return nextState;
    
        default:
            return oldState;
    }
}

export default questionsReducer;