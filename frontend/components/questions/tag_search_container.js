import { connect } from "react-redux";
import TagQuestions from './tag_questions';
import { receiveTagSearchQuestions, clearTagSearchTerm } from './../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        tagName: ownProps.match.params.tagName,
        tagresults: state.entities.tagsearch,
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        tagsearch: (tag) => dispatch(receiveTagSearchQuestions(tag)),
        clear: () => dispatch(clearTagSearchTerm())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(TagQuestions);