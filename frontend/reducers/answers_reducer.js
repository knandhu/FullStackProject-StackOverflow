import { RECEIVE_ANSWER, RECEIVE_ANSWERS } from './../actions/answer_actions';

const answersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState;

    switch (action.type) {
        case RECEIVE_ANSWERS:
            return Object.assign({}, oldState, action.answers);
        
        case RECEIVE_ANSWER:
            // return action.answer;
            nextState = Object.assign({}, oldState);
            nextState[action.answer.id] = action.answer;
            // nextState[action.answer.id].owner = action.answer.owner.slice(0)
            return nextState;
            // nextState[action.answer.id] = action.answer;
            // return nextState;
    
        default:
            return oldState;
    }
}

export default answersReducer;