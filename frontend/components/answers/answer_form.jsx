import React from 'react';
import ReactQuill from "react-quill";
import AnswerAllContainer from './answer_all_container';
import { withRouter } from 'react-router-dom';
import { createHistory } from 'history';
   
class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    //   this.state = this.props.answer;
      this.state = this.props.answer;
      this.updatestate = this.updatestate.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
    componentDidMount() {
        this.props.fetchQuestion(this.props.question);
    }

    updatestate(value) {
        this.setState({
          response:value
      })
    }
    handleSubmit(e) {
        e.preventDefault();
        const answer = Object.assign({}, this.state);
        this.props
          .createAnswer(answer, this.props.question)
          .then(()=> this.props.fetchQuestion(this.props.question))
          .then(() =>
            this.setState({
              response: ""
            })
          );
    }
    render() {
    return (
      <div id="aform">
        <form id="a-box" onSubmit={this.handleSubmit}>
          <h4>Your Answer</h4>
          <br />
          <ReactQuill
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            onChange={this.updatestate}
            value={this.state.response || ""}
          />

          <button id="post-a" type="submit">
            Post Your Answer
          </button>
        </form>
      </div>
    );
  }
}
   

export default withRouter(AnswerForm);