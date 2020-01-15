import React from 'react';
import { Link } from 'react-router-dom';

const SearchPageItem = props => {
    return (
        <div>
            {props.currentUser ? (
                <nav>
                    <Link to={`/questions/${props.question.id}`}>
                        {/* <li key={props.question.id}> */}
                        {props.question.title}
                        {/* </li> */}
                    </Link>
                </nav>) : (
                    <nav>
                        <Link to={'/login'}>
                            {props.question.title}
                        </Link>
                    </nav>
                )}
      </div>
    );}

export default SearchPageItem;
    
