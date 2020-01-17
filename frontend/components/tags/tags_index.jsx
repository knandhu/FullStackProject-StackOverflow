import React from 'react';
import TagIndexItem from './tag_index_item';
import LeftNavigationBar from './../navbar/left_navigation_form';
import Footer from './../home/footer';

class TagsIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tags: this.props.tags
        }
    }
    componentDidMount() {
        this.props.fetchTags().then(() => this.setState({
            tags:[]
        }));
    }
    render() {
        return (
          <div id="tag-page">
            <div id="main">
              <div id="left-nav">
                <LeftNavigationBar />
              </div>

              <div id="tags">
                <h3>Tags</h3>
                <ul>
                  {this.props.tags.map((tag, idx) => (
                    <li key={idx}>
                      <TagIndexItem tag={tag} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <footer>
              <Footer />
            </footer>
          </div>
        );
        
    }
};

export default TagsIndex;