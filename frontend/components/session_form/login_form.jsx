import React from "react";
import { Link } from "react-router-dom";
import { createHistory } from "history";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props.clearErrors();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(()=> this.props.history.push('/questions'));
  }

  renderErrors() {
    return (
      <ul id='err-list'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
        <div className="login-form">
          <div id="img">
            <img src={window.logoURL} height="70" width="40" />
          </div>
          <form className="login-box" onSubmit={this.handleSubmit}>
            <ul>{this.renderErrors()}</ul>
            <div className="login-fields">
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
                <div id="forgot-pwd">Forgot Password?</div>
                <br />
                <input
                  type="password"
                  className="login-input"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <br />

              <input
                className="login-submit"
                type="submit"
                value={this.props.formType}
              />
              <br />
              <div id="login-footer">
                <p>Don't have an account? {this.props.navLink}</p>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default LoginForm;
