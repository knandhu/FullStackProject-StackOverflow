import React from "react";
import { signup,clearSessionErrors } from "./../../actions/session_actions";
import SignUpForm from "./signup_form";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign up",
    navLink: <Link to="/login">Log in</Link>
  }
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
