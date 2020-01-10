import React from "react";
import { login,clearSessionErrors } from "./../../actions/session_actions";
import LoginForm from "./login_form";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: "Log in",
    navLink: <Link to="/signup">Sign up</Link>
  })};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
