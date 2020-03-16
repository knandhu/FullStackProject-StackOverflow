import React from "react";
import { Link,Router } from "react-router-dom";

const TagPageItem = props => {
  return (
    <div>
      {props.currentUser ? (
        <div id="page-item">
          <nav>
            <Link to={`/questions/${props.question.id}`}>
              {props.question.title}
            </Link>
          </nav>
          <ul id="tags">
            {props.question.tags.map((tag, id) => (
              <li id="button" key={id}>
                {tag.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <nav>
          <Link to={"/login"}>{props.question.title}</Link>
        </nav>
      )}
    </div>
  );
};

export default TagPageItem;
