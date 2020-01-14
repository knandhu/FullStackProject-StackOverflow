import { RECEIVE_ANSWER, RECEIVE_ANSWERS } from './../actions/answer_actions';

const answersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState;

    switch (action.type) {
        case RECEIVE_ANSWERS:
            return Object.assign({}, oldState, action.answers);
        
        case RECEIVE_ANSWER:
              nextState = Object.assign({}, oldState);
            return nextState[action.answer.id] = action.answer;
    
        default:
            return oldState;
    }
}

export default answersReducer;