import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

class SearchPageItem extends React.Component {
  constructor(props) {
    super(props);
  }
  tag_search(name) {
    this.props.history.push(`/tag_search/q=${name}`);
  }
  render() {
    return (
      <div>
        {this.props.currentUser ? (
          <div id="page-item">
            <nav>
              <Link to={`/questions/${this.props.question.id}`}>
                {this.props.question.title}
              </Link>
            </nav>
            <ul id="tags">
              {this.props.question.tags.map((tag, id) => (
                <li
                  id="button"
                  key={id}
                  onClick={() => this.tag_search(tag.name)}
                >
                  {tag.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <nav>
            <Link to={"/login"}>{this.props.question.title}</Link>
          </nav>
        )}
      </div>
    );
  }
}
// const SearchPageItem = props => {
//     return (
//         <div>
//             {props.currentUser ? (
//                 <div id='page-item'>
//                 <nav>
//                     <Link to={`/questions/${props.question.id}`}>
//                         {props.question.title}
//                     </Link>
//                     </nav>
//                     <ul id='tags'>
//                         {props.question.tags.map((tag, id) => (
//                             <li id='button' key={id}>{tag.name}</li>
//                     ))}
//                     </ul>
//                 </div>) : (
//                     <nav>
//                         <Link to={'/login'}>
//                             {props.question.title}
//                         </Link>
//                     </nav>
//                 )}
//       </div>
//     );}

export default withRouter(SearchPageItem);
