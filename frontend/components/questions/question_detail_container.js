import { connect } from "react-redux";
import { fetchQuestion,deleteQuestion } from './../../actions/question_actions';
import QuestionDetailForm from './question_detail_form';


const mapStateToProps = (state, ownProps) => {
    // debugger;
    // console.log(state.entities.questions[ownProps.match.params.questionId]);
    return ({
        question: state.entities.questions[ownProps.match.params.questionId],
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.question,
    });
};

const mapDispatchToProps = dispatch => ({
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    deleteQuestion: (question) => dispatch(deleteQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailForm);

