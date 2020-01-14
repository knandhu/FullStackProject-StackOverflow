import { connect } from "react-redux";
import { fetchQuestion, deleteQuestion } from './../../actions/question_actions';
import { createAnswer, requestAnswers } from './../../actions/answer_actions';
import QuestionDetailForm from './question_detail_form';


const mapStateToProps = (state, ownProps) => {
    // console.log(state.entities.questions[ownProps.match.params.questionId]);
    return ({
        answer: {
            response: '',
            question_id: ownProps.match.params.questionId,
            owner_id: state.session.id
        },
        question: state.entities.questions[ownProps.match.params.questionId],
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.question,
    });
};

const mapDispatchToProps = (dispatch, { question }) => {
    // console.log('qdetail', question);
    return({
  fetchQuestion: questionId => dispatch(fetchQuestion(questionId)),
  deleteQuestion: question => dispatch(deleteQuestion(question)),
  createAnswer: answer => dispatch(createAnswer(answer)),
        // requestAnswers: () => dispatch(requestAnswers(questionId))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailForm);

