import React from 'react';
import QuestionIndexItem from './question_index_item';
import { Link } from 'react-router-dom';
import Footer from './../home/footer';
import LeftNavigationBar from '../navbar/left_navigation_form';

class QuestionsIndex extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchQuestions();
    }
    render() {
      return (
        <div id="qindex-main">
         
          <div id="main">
            <div id="left-nav">
              <LeftNavigationBar />
            </div>
            <div id="q-index">
              <div id="main-bar">
                <div id="askq">
                  <h3>Top Questions</h3>
                  <nav>
                    <Link to="/questions/ask">
                      <button id="button" type="button">
                        Ask a Question
                      </button>
                    </Link>
                  </nav>
                </div>

                {this.props.question.map((question, idx) => (
                  <ul id="qidxitem" key={idx}>
                    <QuestionIndexItem key={idx} question={question} />
                  </ul>
                ))}
                <h2>
                  Looking for more? Browse the complete list of questions, or
                  popular tags. Help us answer unanswered questions.
                </h2>
              </div>
            </div>
            <div id="side-bar">
              <div id='blog'>
                <h3>Blog</h3>
                <li>Winter persists, but Winter Bash 2019 has drawn to a close!</li>
                <li>How to create micro-interactions with react-spring: Part 1</li>
                <li>Thank you, Shog9</li>
                <li>
                  Thank you, Robert Cartaino</li>
              </div>
              <div id='ques'>
                <h3>Hot Network Questions</h3>
                <li>Is it a problem that my bathtub drains directly into the wall?</li>
                <li>Is chord scale theory an unhelpful starting point for players?</li>
                <li>Is there a robust way to align the baseline of subscripts?</li>
                <li>Poor error handling source code review  </li>

              </div>
            </div>
          </div>

          <footer>
            <Footer />
          </footer>
        </div>
      );
    }
};

export default QuestionsIndex;