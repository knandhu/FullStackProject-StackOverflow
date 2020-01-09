import { connect } from "react-redux";
import { fetchQuestions } from './../../actions/question_actions';
import QuestionsIndex from './questions_index';
const mapStateToProps = state => {
    return ({
        question: Object.values(state.entities.questions),
        currentUser: state.entities.users[state.session.id],
    });
};

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);

