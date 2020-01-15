
import React from 'react';
import { Link } from 'react-router-dom';
import LeftNavigationBar from './../navbar/left_navigation_form';
import Footer from './../home/footer';
import QuestionForm from './question_form';
import AnswerForm from './../answers/answer_form';
import AnswerAllContainer from './../answers/answer_all_container';
import CreateAnswerFormContainer from './../answers/create_answer_form_container';
import { createHistory } from 'history';

class QuestionDetailForm extends React.Component{
    constructor(props) {
        super(props);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.state = this.props.answer;
    }
    componentDidMount() {
        this.props
          .fetchQuestion(this.props.question.id)
    }
    deleteQuestion() {
        this.props.deleteQuestion(this.props.question)
            .then(() => this.props.history.push('/questions'))
    }
    render() {
        return (
          <div id="q-detail">
            <div id="main">
              <div id="left-nav">
                <LeftNavigationBar />
              </div>
              {this.props.question ? (
                <div id="content">
                  <div id="title-ask">
                    <h2>{this.props.question.title}</h2>
                    <nav>
                      <Link to="/questions/ask">Ask a Question</Link>
                    </nav>
                    {/* <button type="button" onClick={}>Ask Question</button> */}
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
                    <ul>
                      <h4>{this.props.question.answers.length} Answers</h4>
                      {this.props.question.answers.map((answer, idx) => (
                        <li id="answers" key={idx}>
                          {answer.response}
                        </li>
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
              <div id="side-bar">
                <h3>Blog</h3>
                <h3>Hot Network Questions</h3>
                <li>
                  {" "}
                  Why would a robot overlord want to give their citizens
                  emotion?
                </li>
                <li>
                  How do I tell a recruiter that I'm not interested after an
                  interview?{" "}
                </li>
                <li>
                  StringReplace with multiple patterns What not to say regarding
                  my motivation for finding a new job?
                </li>{" "}
                <li>
                  Building the perfect number 28 with fractions What should I do
                  when I have no ideas and no strategies?
                </li>{" "}
                <li>
                  Did Bernie Sanders say that a woman cannot be president?
                </li>{" "}
                <li>
                  Innate Spellcasting vs Rakshasa Old part-animated live action
                  movie musical; single mom takes a correspondence course on
                  magic{" "}
                </li>
                <li>
                  Is it bad form to go for a lengthy but losing endgame that you
                  suspect will be winning on time?
                </li>
                <li>
                  {" "}
                  Did Ducard make a mistake or willingly overlook this detail in
                  Batman Begins?{" "}
                </li>

              </div>
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