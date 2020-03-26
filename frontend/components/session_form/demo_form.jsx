import React from "react";
import { Link } from "react-router-dom";

class DemoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: "email@email.com",
      password: "password"
    };
    this.demo(user);
    setTimeout(() => {
      this.props
        .processForm(user)
        .then(() => this.props.history.push("/questions"));
    }, 2500);
  }

  demo(user) {
    const intervalSpeed = 75;
    const { email, password } = user;
    const demoEmailTime = email.length * intervalSpeed;
    const demoPasswordTime = password.length * intervalSpeed;
    const buffer = intervalSpeed * 2;
    const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
    this.demoEmail(email, intervalSpeed);
    setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);
  }
  demoEmail(email, intervalSpeed) {
    let i = 0;
    setInterval(() => {
      if (i <= email.length) {
        this.setState({ email: email.slice(0, i) });
        i++;
      } else {
        clearInterval();
      }
    }, intervalSpeed);
  }
  demoPassword(password, intervalSpeed) {
    let j = 0;
    setInterval(() => {
      if (j <= password.length) {
        this.setState({ password: password.slice(0, j) });
        j++;
      } else {
        clearInterval();
      }
    }, intervalSpeed);
  }

  render() {
    return (
      <div className="demo-form">
        <form className="demo-box" onSubmit={this.handleSubmit}>
          <div className="demo-fields">
            <label htmlFor="">
              Email
              <br />
              <input
                type="text"
                className="demo-input"
                placeholder="Email"
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
                placeholder="Password"
                className="demo-input"
                value={this.state.password}
                autoComplete="current-password"
                onChange={this.update("password")}
              />
            </label>
            <br />

            <input
              className="demo-submit"
              type="submit"
              value={this.props.formType}
            />
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default DemoForm;
