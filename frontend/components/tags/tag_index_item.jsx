import React from 'react';
import { Link, withRouter } from "react-router-dom";

class TagIndexItem extends React.Component{
    constructor(props) {
        super(props)
    }

    tag_search(name) {
        // console.log(name); 
        // this.props.tag_search;
        this.props.history.push(`tag_search/q=${name}`);
    }
    render() {
        return (
            <div>
                <li key={this.props.tag.id}
                    onClick={() => this.tag_search(this.props.tag.name)}
                >{this.props.tag.name}</li>
            </div>
        );    
    }
}
// const TagIndexItem = (props) => {
//     return (
//         <div>
//             {props.tag.name}
//         </div>
//     );
// }


export default withRouter(TagIndexItem);