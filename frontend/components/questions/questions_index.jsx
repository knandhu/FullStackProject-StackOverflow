import React from 'react';
import QuestionIndexItem from './question_index_item';
import { Link } from 'react-router-dom';

class QuestionsIndex extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchQuestions();
    }
    render() {
        return (
          <div>
            
            <span>Top Questions</span>
            <nav>
              <Link to="/questions/ask">
                <button type="button">Ask a Question</button>
              </Link>
            </nav>

            {this.props.question.map((question, idx) => (
              <ul>
                <QuestionIndexItem key={idx} question={question} />
              </ul>
            ))}
          </div>
        );
    }
};

export default QuestionsIndex;