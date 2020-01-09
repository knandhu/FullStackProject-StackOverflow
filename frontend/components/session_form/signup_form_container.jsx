import React from "react";
import { signup } from "./../../actions/session_actions";
import SignUpForm from "./signup_form";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign up",
  navLink: <Link to="/login">Log in</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
