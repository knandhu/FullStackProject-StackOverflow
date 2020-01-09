
import React from "react";
import { login } from "./../../actions/session_actions";
import DemoForm from "./demo_form";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Demo Login"
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoForm);
