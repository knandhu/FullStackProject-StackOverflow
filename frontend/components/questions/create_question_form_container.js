import { connect } from "react-redux";
import { createQuestion, fetchQuestions, clearErrors } from "../../actions/question_actions";
import QuestionForm from './question_form';
const mapStateToProps = ({ errors, session, entities: { users } }) => {
  // const session = state.session;
  return ({
    question: {
      title: '',
      body: '',
      tag_names:[],
      owner_id: users[session.id].id,
      new_tag:''
    },
    currentUser: users[session.id],
    errors:errors.question,
    formType: 'Post Your Question'
})
};

const mapDispatchToProps = dispatch => ({
  action: (question) => dispatch(createQuestion(question)),
  clearErrors: () => dispatch(clearErrors())
  // allquestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
