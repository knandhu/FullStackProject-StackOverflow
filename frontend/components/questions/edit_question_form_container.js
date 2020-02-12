import { connect } from "react-redux";
import { updateQuestion, clearErrors } from "../../actions/question_actions";
import QuestionForm from './question_form';
const mapStateToProps = ({ errors, session, entities: { users,questions } },ownProps) => {
    // const session = state.session;
    // const users = state.entities.users;
    const ques = questions[ownProps.match.params.questionId];

    return ({
        question:
        {
            id:ques.id,
            title: ques.title,
            body: ques.body,
            tag_names: [],
            tags:ques.tags,
            owner_id: ques.owner_id,
            new_tag: '',
            // tag_list:[]
        },
        currentUser: users[session.id],
        errors: errors.question,
        formType: 'Edit'
    })
};

const mapDispatchToProps = dispatch => ({
    action: (question) => dispatch(updateQuestion(question)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
