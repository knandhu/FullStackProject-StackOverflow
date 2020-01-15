{/* <AnswerForm
  answer={this.props.answer}
  createAnswer={this.props.createAnswer}
  requestAnswers={this.props.requestAnswers}
/>; */}



import { connect } from "react-redux";
import AnswerForm from './answer_form';
import {createAnswer } from "./../../actions/answer_actions";
import { fetchQuestion } from "../../actions/question_actions";


const mapStateToProps = (state, { question }) => {
    return({
  answer: {
    response: "",
    question_id: question.id,
    owner_id: state.session.id
  },
  question:question.id
})};
const mapDispatchToProps = (dispatch) => ({
    createAnswer: (answer, questionId) => dispatch(createAnswer(answer,questionId)),
    fetchQuestion: (questionId)=> dispatch(fetchQuestion(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);


 