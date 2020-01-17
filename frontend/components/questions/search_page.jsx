import React from 'react';
import SearchPageItem from './../questions/search_page_item';
import LeftNavigationBar from './../navbar/left_navigation_form';
import Footer from './../home/footer';

export default class SearchPage extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            searchTerm: this.props.searchTerm,
        }
        this.props.search(this.props.searchTerm);
    }


  componentDidUpdate() {
    
    if (this.state.searchTerm !== this.props.match.params.searchTerm) {
        this.props.search(this.props.searchTerm)
            .then(() => this.setState({
            searchTerm: this.props.searchTerm
        }));
    } 
    }

    render() {
     
        return (
          <div>
            <div id="search-page">
              <div id="left-nav">
                <LeftNavigationBar />
              </div>
                <ul id='search-results'>
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

                </div>
              </div>
            </div>
            <footer>
              <Footer />
            </footer>
          </div>
        );
    }
}