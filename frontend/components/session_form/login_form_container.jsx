import React from "react";
import { login } from "./../../actions/session_actions";
import LoginForm from "./login_form";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Log in",
  navLink: <Link to="/signup">Sign up</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
