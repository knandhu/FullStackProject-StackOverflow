import React from "react";
import TagPageItem from "./../questions/tag_page_item";
// import LeftNavigationBar from "./../navbar/left_navigation_form";
import Footer from "./../home/footer";

export default class TagQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagName: this.props.tagName
    };
    this.props.tagsearch(this.props.tagName);
  }

  componentDidUpdate() {
    if (this.state.tagName !== this.props.match.params.tagName) {
      this.props.tagsearch(this.props.tagName).then(() =>
        this.setState({
          tagName: this.props.tagName
        })
      );
    }
  }

  render() {
    return (
      <div>
        <div id="tag-page">
          <ul id="search-results">
            <div id="border">
              <h3>List of Questions with Tag: {this.props.tagName}</h3>
              <br />
              {this.props.tagresults.length != 0 ? (
                this.props.tagresults.map((ques, idx) => (
                  <li key={idx}>
                    <TagPageItem
                      question={ques}
                      currentUser={this.props.currentUser}
                    />
                  </li>
                ))
              ) : (
                <h5>"No Results Found"</h5>
              )}
            </div>
          </ul>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
