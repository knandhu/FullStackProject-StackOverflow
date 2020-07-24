import { RECEIVE_SEARCH_QUESTIONS, CLEAR_SEARCH } from './../actions/search_actions';

const searchReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SEARCH_QUESTIONS:
            // return Object.assign( oldState, action.questions);
            return action.questions
        
        case CLEAR_SEARCH:
            // let nextState = Object.assign({}, oldState);
            return [];
        
    
        default:
            return oldState;
    }
}

export default searchReducer;
