import React from 'react';
import { withRouter } from "react-router";

class AnswerListAll extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.action(this.props.question.id);
    }

    render() {
        return (
          <div>
                Hi Ther!!
          </div>
        );
    }
}

export default (AnswerListAll);