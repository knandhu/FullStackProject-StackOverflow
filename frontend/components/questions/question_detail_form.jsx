
import React from 'react';
import { Link } from 'react-router-dom';
import LeftNavigationBar from './../navbar/left_navigation_form';
import Footer from './../home/footer';
// import QuestionForm from './question_form';
import AnswerForm from './../answers/answer_form';
import AnswerContainer from '../answers/answer_container';
import CreateAnswerFormContainer from './../answers/create_answer_form_container';
import { createHistory } from 'history';
import Answer from './../answers/answer';
import ReactQuill from "react-quill";


class QuestionDetailForm extends React.Component{
    constructor(props) {
        super(props);
      this.deleteQuestion = this.deleteQuestion.bind(this);
      this.tag_search = this.tag_search.bind(this);
      this.state = this.props.answer;
      this.props.fetchQuestion(this.props.answer.question_id);
    }
    componentDidMount() {
        this.props
          .fetchQuestion(this.props.answer.question_id)
    }
  
  tag_search(name) {
    // console.log(name); 
    // this.props.tag_search;
    this.props.history.push(`tag_search/q=${name}`);
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
                      <Link to="/questions/ask">Ask Question</Link>
                    </nav>
                  </div>
                  <ReactQuill
                    value={this.props.question.body}
                    modules={{
                      toolbar: false
                    }}
                    readOnly={true}
                  />
                  {this.props.question.tags ? (
                    <ul id="tags">
                      {this.props.question.tags.map((tag, idx) => (
                        <li key={idx}
                          onClick={() => this.tag_search(tag.name)}
                        >{tag.name}</li>
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
                  <br />
                  {this.props.question.answers ? (
                    <ul>
                      <h4>{this.props.question.answers.length} Answers</h4>
                      {this.props.question.answers.map((answer, idx) => (
                        <li id="answers" key={idx}>
                          <AnswerContainer questionId={this.props.question.id}
                            answer={answer}/>
                          {/* <Answer answer={answer} /> */}
                        </li>
                      ))}
                    </ul>
                  ) : null}
              
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