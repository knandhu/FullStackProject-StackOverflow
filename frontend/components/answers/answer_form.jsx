import React from 'react';
import ReactQuill from "react-quill";
import AnswerAllContainer from './answer_all_container';
   
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
        this.props.createAnswer(this.state).then(() =>
          this.setState({
            response: ""
          }))
        // ).then(()=>this.props.action(this.props.question.id));
    }
    render() {
    //   console.log("ansqid", this.props);
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
   

export default AnswerForm;