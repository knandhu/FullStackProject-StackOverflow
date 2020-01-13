
import React from 'react';
import { Link } from 'react-router-dom';

const QuestionIndexItem = (props) => {
  // console.log(`/questions/${props.question.id}`)
  // console.log(props.question.id);
  // debugger;
    return (
      <div id='qindexitem'>  
        
        <nav>
        <Link to={`/questions/${props.question.id}`}>
          <li id='questions-list' key={props.question.id}>{props.question.title}</li>
          </Link>
        </nav>
        <div id="tags">
        {props.question.tags.map((tag, id) => (
          // <ul key={id}> 
          <li id="button" key={id}>{tag.name}</li>
        ))}
        </div>
      </div>
    )   
};

export default QuestionIndexItem;