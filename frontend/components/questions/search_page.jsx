import React from 'react';
import { searchQuestions } from './../../util/search_questions_api_util';
import SearchPageItem from './../questions/search_page_item';
import LeftNavigationBar from './../navbar/left_navigation_form';
import Footer from './../home/footer';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: this.props.searchTerm,
            results: this.props.results
        }
        this.props.search(this.props.searchTerm);
    }

    componentDidMount() {
        this.setState({
            searchTerm: this.props.searchTerm
        })
    }
componentDidUpdate() {
    if (this.state.searchTerm !== this.props.match.params.searchTerm) {
        this.props.search(this.props.searchTerm)
            .then(() => this.setState({
            searchTerm: this.props.searchTerm
        }));
    } else {
        return;
    }
    }

    render() {
     
        return (
          <div>
            <div id="search-page">
              <div id="left-nav">
                <LeftNavigationBar />
              </div>

                    <ul>
                <h3>Search Results</h3>
                {this.props.results.length != 0 ? (
                  this.props.results.map((ques, idx) => (
                    <li key={idx}>
                      <SearchPageItem question={ques} currentUser={this.props.currentUser} />
                    </li>
                  ))
                ) : (
                  <h5>"No Results Found"</h5>
                )}
              </ul>
              <div id="side-bar">
                <h3>Blog</h3>
                <h3>Hot Network Questions</h3>
              </div>
            </div>
            <footer>
              <Footer />
            </footer>
          </div>
        );
    }
}