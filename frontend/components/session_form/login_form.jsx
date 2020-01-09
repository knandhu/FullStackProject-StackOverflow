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
    console.log("type", this.props.processForm(user));
    console.log("type", this.props.history);
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
    console.log(this.props);
    return (
      <div className="login-form">
        <div id='img'>
          <img src={window.logoURL} height="70" width="40" />
        </div>
        <form className="login-box" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
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
                <div id='forgot-pwd'>Forgot Password?</div>
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
