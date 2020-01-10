import React from "react";
import { Link } from "react-router-dom";

class DemoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "email@email.com",
            password: "password"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return (e => (
            this.setState({ [field]: e.target.value })
        ));
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(()=>this.props.history.push('/questions'));
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
                    className="demo-input"
                    value={this.state.password}
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
