import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import QuestionsIndex from "./questions_index";
import Footer from "./../home/footer";
import DOMPurify from "dompurify";

import ReactQuill, { Quill } from "react-quill";

import parse from "html-react-parser";
import { createHistory } from "history";

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.props.clearErrors();
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

    this.state = this.props.question;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTag = this.addTag.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateBody(value) {
    this.setState({
      body: value
    });
  }

  addTag() {
    let tags = this.state.tags
      ? this.state.tags.map((tag, idx) => tag.name)
      : this.state.tag_names;

    const lastele =
      this.props.formType == "Update Question"
        ? this.state.tag_names.slice(this.state.tags.length)
        : null;
    tags =
      this.props.formType == "Update Question"
        ? [...this.state.tags.map((tag, idx) => tag.name), ...lastele]
        : tags;

    this.setState({
      tag_names: [...tags, this.state.new_tag],
      new_tag: ""
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formType == "Update Question"
      ? this.props
          .action(this.state)
          .then(() =>
            this.props.history.push(`/questions/${this.props.question.id}`)
          )
      : this.props
          .action(this.state)
          .then(() =>
            this.setState({
              title: "",
              body: "",
              new_tag: "",
              tag_names: []
            })
          )
          .then(() => this.props.history.push(`/questions/`));
  }

  render() {
    return (
      <div id="qcreate">
        <div id="qform">
          {this.props.formType === "Update Question" ? (
            ""
          ) : (
            <h3>Ask a public question</h3>
          )}
          {this.renderErrors()}
          <form id="q-box" onSubmit={this.handleSubmit}>
            <label htmlFor="">
              Title
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                id="question-fields"
                value={this.state.title}
                onChange={this.update("title")}
              />
            </label>

            <br />
            <label>
              Body
              <p>
                include all the information someone would need to answer your
                question
              </p>
            </label>
            <ReactQuill
              theme="snow"
              modules={this.modules}
              formats={this.formats}
              onChange={this.updateBody}
              value={this.state.body}
            />

            <br />
            {
              this.state.tag_names.map((tag, idx) => {
                return (
                  <ul key={idx}>
                    <div>Tag {idx+1}: {tag}</div>
                  </ul>
                )
              })}

            <label htmlFor="">
              Tags
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="question-fields"
                value={this.state.new_tag}
                onChange={this.update("new_tag")}
              />
              <button id="add-tag" type="button" onClick={this.addTag}>
                Add Tag
              </button>
            </label>

            <br />
            <button id="post-q" type="submit">
              {this.props.formType}
            </button>
          </form>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
