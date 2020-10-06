import { RECEIVE_TAGS } from './../actions/tag_actions';
//
const tagReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TAGS:
            return action.tags;
            
            
    
        default:
            return oldState;
    }
}

export default tagReducer;
