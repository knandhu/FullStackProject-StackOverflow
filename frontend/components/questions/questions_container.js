import { connect } from "react-redux";
import { fetchQuestions, fetchTagQuestions } from './../../actions/question_actions';
import QuestionsIndex from './questions_index';
const mapStateToProps = state => {
    return ({
        question: Object.values(state.entities.questions).reverse(),
        currentUser: state.entities.users[state.session.id],
    });
};

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchTagQuestions: (tag) => dispatch(fetchTagQuestions(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);

