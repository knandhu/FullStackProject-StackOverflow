
import React from 'react';
import { Link } from 'react-router-dom';

const QuestionIndexItem = (props) => {
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
          <li onClick={tag_search} id="button" key={id}>{tag.name}</li>
        ))}
        </div>
      </div>
    )   
};

export default QuestionIndexItem;

const tag_search = () => {
  
}