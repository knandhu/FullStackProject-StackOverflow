
import React from 'react';
import { Link } from 'react-router-dom';
import LeftNavigationBar from './../navbar/left_navigation_form';
import Footer from './../home/footer';
import QuestionForm from './question_form';
// import { createHistory } from 'history';

class QuestionDetailForm extends React.Component{
    constructor(props) {
        super(props);
        this.deleteQuestion = this.deleteQuestion.bind(this);
    }
    // componentWillUpdate() {
    //     debugger;
    //     this.props.fetchQuestion(this.props.question)
    // }
    deleteQuestion() {
        this.props.deleteQuestion(this.props.question)
            // .then(() => <h4>Deletion Successful</h4>)
            .then(() => this.props.history.push('/questions'))
    }
    render() {
        // console.log(this.props)
        return (
            <div id='q-detail'>
                <div id="main">
                <div id='left-nav'>
                    <LeftNavigationBar />
                    </div>
                    {this.props.question ?
                        
                        (<div id='content'>
                        
                            <p>Title: {this.props.question.title}</p>
                            <p>Body: {this.props.question.body}</p>
                            {this.props.question.tags ?
                                (<ul id="tags">
                                    {this.props.question.tags.map((tag, idx) => <li>{tag.name}</li>)}
                                </ul>) : null}
                            {this.props.question.owner_id === this.props.currentUser.id ?
                                (<div>< Link id='button1' to={`/questions/${this.props.question.id}/edit`}>Edit</Link>
                                    <button id='button2'
                                        onClick={this.deleteQuestion}>Delete</button>
                                </div>) : null
                            }
                        </div>) : null}
                </div>
                <footer>
                    <Footer />
                </footer>
                {/* <QuestionForm question={this.props.question} errors={this.props.errors} /> */}
            </div>
        )
    }

}

export default QuestionDetailForm;