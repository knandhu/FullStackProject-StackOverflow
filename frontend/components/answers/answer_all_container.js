
import { connect } from "react-redux";
import { requestAnswers } from './../../actions/answer_actions';
import AnswerListAll from './answer_list_all';



// const mapStateToProps = (state, ownProps) => {
    
//     return ({
//         question:state.entities.question[ownProps.match.params.questionId] 
//     })
// }
const mapDispatchToProps = (dispatch, { question }) => {
    return ({
        action: () => dispatch(requestAnswers(question.id))
        //   destroyTodo: () => dispatch(deleteTodo(todo))
    })
};

export default connect(
  null, 
  mapDispatchToProps
)(AnswerListAll);


 