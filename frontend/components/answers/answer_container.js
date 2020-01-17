import Answer from './answer';
import { connect } from 'react-redux';
import { requestAnswer } from './../../actions/answer_actions';
import { allUsers } from './../../actions/session_actions';

const mapStateToProps = (state, { questionId, answer }) => {
    return {
        questionId: questionId,
        answer: answer,
        owner:state.entities.users[answer.owner_id]
    }
};


const mapDispatchToProps = dispatch => ({
    fetchAns: (questionId, answerId) => dispatch(requestAnswer(questionId, answerId)),
    allUsers: () => dispatch(allUsers())
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Answer);