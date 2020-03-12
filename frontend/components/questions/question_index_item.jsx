import React from "react";
import { Link } from "react-router-dom";

// const QuestionIndexItem = props => {
//   return (
//     <div id="qindexitem">
//       <nav>
//         <Link to={`/questions/${props.question.id}`}>
//           <li id="questions-list" key={props.question.id}>
//             {props.question.title}
//           </li>
//         </Link>
//       </nav>
//       <div id="tags">
//         {props.question.tags.map((tag, id) => (
//           // <ul key={id}>
//           <li onClick={tag_search(this)} value={tag.name} id="button" key={id}>
//             {tag.name}
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// };

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  tag_search(name) {
    this.props.fetchTagQuestions(name);
  }

  render() {
    return (
      <div id="qindexitem">
        <nav>
          <Link to={`/questions/${this.props.question.id}`}>
            <li id="questions-list" key={this.props.question.id}>
              {this.props.question.title}
            </li>
          </Link>
        </nav>
        <div id="tags">
          {this.props.question.tags.map(function(tag, id) {
            return (
              <li
                name={tag.name}
                id="button"
                key={id}
                onClick={()=>this.tag_search(tag.name)}
              >
                {tag.name}
              </li>
            );
          }, this)}
        </div>
      </div>
    );
  }
}
export default QuestionIndexItem;

// const tag_search = (obj) => {
//   console.log(obj.value);
// };
