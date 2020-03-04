import { connect } from "react-redux";
import { updateQuestion,fetchQuestion, clearErrors } from "../../actions/question_actions";
import QuestionForm from './question_form';
const mapStateToProps = ({ errors, session, entities: { users,questions } },ownProps) => {
    const ques = questions[ownProps.match.params.questionId];

    return ({
        question:
        {
            id: ques ? ques.id : ownProps.match.params.questionId,
            title: ques ? ques.title:'',
            body: ques ? ques.body:'',
            tag_names: [],
            tags: ques ? ques.tags :[],
            owner_id: ques ? ques.owner_id:null,
            new_tag: '',
        },
        quesId: ownProps.match.params.questionId,
        currentUser: users[session.id],
        errors: errors.question,
        formType: 'Update Question'
    })
};

const mapDispatchToProps = dispatch => ({
    action: (question) => dispatch(updateQuestion(question)),
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
