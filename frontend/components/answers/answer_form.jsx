import React from 'react';
import ReactQuill from "react-quill";
import AnswerAllContainer from './answer_container';
import { withRouter } from 'react-router-dom';
import { createHistory } from 'history';

   
class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.answer;
    this.updatestate = this.updatestate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modules = {
      toolbar: [
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["clean"]
      ]
    };

    this.formats = [
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "list",
      "bullet",
      "align",
      "color",
      "background"
    ];

    //  this.richText = document.getElementsByClassName("ql-editor")[0];
  }
  componentDidMount() {
    this.props.fetchQuestion(this.props.question);
  }

  updatestate(value) {
      this.setState({
        response:value
    })
  }


  // updatestate(contents,delta,source,editor) {
   
  //   this.setState({
  //     response: contents
  //   });
 
  // }


  handleSubmit(e) {
    e.preventDefault();
    String.fromCharCode(179);
    const answer = Object.assign({}, this.state);
    this.props
      .createAnswer(answer, this.props.question)
      .then(() => this.props.fetchQuestion(this.props.question))
      .then(() =>
        this.setState({
          response: ""
        })
      );
  }
  render() {
    const { response } = this.state.response;
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
            value={this.state.response || ''}
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