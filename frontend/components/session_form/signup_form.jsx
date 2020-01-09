import React from "react";
import { Link } from "react-router-dom";
import { createHistory } from "history";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(()=> this.props.history.push('/questions'));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <span id="signup-text">
          <h1>Join the Stack Overflow community </h1>
          <li> Get unstuck — ask a question</li>
          <li> Unlock new privileges like voting and commenting</li>
          <li> Save your favorite tags, filters, and jobs</li>
          <li>Earn reputation and badges</li>
          <div id="signup-footer">
            Use the power of Stack Overflow inside your organization. Try a
            <div id="highlight-text">
              free trial of Stack Overflow for Teams.
            </div>
          </div>
        </span>
          <form className="signup-box" onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <div className="input-fields">
              <label htmlFor="">
                Display name
                <br />
                <input
                  type="text"
                  className="login-input"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
              </label>
              <br />
              <label htmlFor="">
                Email
                <br />
                <input
                  type="text"
                  className="login-input"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>
              <br />
              <label htmlFor="">
                Password
                <br />
                <input
                  type="password"
                  className="login-input"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <br />
              <p>
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>

              <div id="checkbox1">
                <input type="checkbox" id="cb" />
                <label htmlFor="cb">
                  Opt-in to receive occasional product updates, user research
                  invitations, company announcements, and digests
                </label>
              </div>

              <input
                className="session-submit"
                type="submit"
                value={this.props.formType}
              />
              <br />
              <div id="footer">
                By clicking “Sign up”, you agree to our terms of service,
                privacy policy and cookie policy
                <p>Already have an account? {this.props.navLink}</p>
              </div>
            </div>
          </form>
      </div>
    );
  }
}

export default SignUpForm;
