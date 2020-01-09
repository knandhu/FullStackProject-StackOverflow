
import React from 'react';
import { Link } from 'react-router-dom';

const QuestionIndexItem = (props) => {
    return (
        <div id='qindexitem'>   
        <li id='questions-list' key={props.question.id}>{props.question.title}</li>
      </div>
    );
};

export default QuestionIndexItem;