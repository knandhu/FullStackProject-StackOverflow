
import React from 'react';
import { Link } from 'react-router-dom';
import LeftNavigationBar from './../navbar/left_navigation_form';
import Footer from './../home/footer';
import QuestionForm from './question_form';
import AnswerForm from './../answers/answer_form';
import AnswerAllContainer from './../answers/answer_all_container';
import CreateAnswerFormContainer from './../answers/create_answer_form_container';
// import { createHistory } from 'history';

class QuestionDetailForm extends React.Component{
    constructor(props) {
        super(props);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.state = this.props.answer;
    }
    componentDidMount() {
        this.props.fetchQuestion(this.props.question.id)
    }
    deleteQuestion() {
        this.props.deleteQuestion(this.props.question)
            // .then(() => <h4>Deletion Successful</h4>)
            .then(() => this.props.history.push('/questions'))
    }
    render() {
        // console.log('qdetail',this.props)
        return (
          <div id="q-detail">
            <div id="main">
              <div id="left-nav">
                <LeftNavigationBar />
              </div>
              {this.props.question ? (
                        <div id="content">
                            <div id="title-ask">
                                <h3>{this.props.question.title}</h3>
                                <button type="button" onClick={}>Ask Question</button>
                                </div>
                  <p>Body: {this.props.question.body}</p>
                  {this.props.question.tags ? (
                    <ul id="tags">
                      {this.props.question.tags.map((tag, idx) => (
                        <li key={idx}>{tag.name}</li>
                      ))}
                    </ul>
                  ) : null}

                  {this.props.question.answers ? (
                    <ul id="answers">
                                    <h4>{this.props.question.answers.length}{" "}Answers</h4>
                      {this.props.question.answers.map((answer, idx) => (
                        <li key={idx}>{answer.response}</li>
                      ))}
                    </ul>
                  ) : null}
                  {this.props.question.owner_id ===
                  this.props.currentUser.id ? (
                    <div>
                      <Link
                        id="button1"
                        to={`/questions/${this.props.question.id}/edit`}
                      >
                        Edit
                      </Link>
                      <button id="button2" onClick={this.deleteQuestion}>
                        Delete
                      </button>
                    </div>
                  ) : null}
                  {/* <AnswerAllContainer question={this.props.question} /> */}
                  <CreateAnswerFormContainer question={this.props.question} />
                </div>
              ) : null}
            </div>

            <footer>
              <Footer />
            </footer>
            {/* <QuestionForm question={this.props.question} errors={this.props.errors} /> */}
          </div>
        );
    }

}

export default QuestionDetailForm;