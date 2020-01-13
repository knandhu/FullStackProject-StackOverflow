import { connect } from "react-redux";
import { updateQuestion } from "../../actions/question_actions";
import QuestionForm from './question_form';
const mapStateToProps = ({ errors, session, entities: { users,questions } },ownProps) => {
    // const session = state.session;
    // const users = state.entities.users;
    // console.log('paramsId', ownProps.match.params.questionId);
    return ({
        question: questions[ownProps.match.params.questionId],
        currentUser: users[session.id],
        errors: errors.question,
        formType: 'Edit'
    })
};

const mapDispatchToProps = dispatch => ({
    action: (question) => dispatch(updateQuestion(question))
    // allquestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
