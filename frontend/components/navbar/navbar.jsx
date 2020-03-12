
import React from "react";
import { Route, Link, HashRouter, withRouter } from "react-router-dom";
// import QuestionsContainer from "./../questions/questions_container";
// import { searchQuestions } from './../../util/search_questions_api_util';
// import SearchBarContainer from './../questions/search_bar_container';
// import SearchPage from "../questions/search_page";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        searchTerm: "",
      };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.search = this.search.bind(this);
  }

  sessionLinks() {
    return(
    <nav className="button">
      <Link to="/login">
        <button className="button2" type="button">
          Log in
        </button>
      </Link>
      <Link to="/signup">
        <button className="button1" type="button">
          Sign up
        </button>
      </Link>
      <Link to="/demo">
        <button className="button1" type="button">
          Demo User
        </button>
      </Link>
    </nav>)
  };
  personalGreeting() {
    return(
      <hgroup className="header-group">
        <div className="dropdown">
          <img className='dropbtn' src="assets/prof-icon.png" height="20" width="20" />
          <div className="dropdown-content">
            <Link to='/users'>Users</Link>
            <Link to='/tags'>Tags</Link> 
            <Link to='/questions/ask'>Ask Question</Link>
          </div>
        </div>
      {/* <img src="assets/prof-icon.png" height="20" width="20" /> */}
      {/* <img src="assets/inbox-icon.png" height="20" width="20" />
      <img src="assets/trophy-icon.png" height="20" width="20" />
      <img src="assets/ques-icon.png" height="20" width="20" />
      <img src="assets/drop-list-icon.png" height="20" width="20" /> */}
      <button className="header-button" onClick={this.props.logout}>
        Log Out
      </button>
    </hgroup>)
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.search
    this.props.history.push(`/search/q=${this.state.searchTerm}`)
    this.setState({
        searchTerm:''
      });
  }

  search() {
    return(e) => (
      this.setState({
        searchTerm: e.target.value
      }
      ));

  };

  render() {
    let currentUser = this.props.currentUser;
  
             return (
               <div id="nav">
              
                 {currentUser ? (
                   <Link to="/questions" className="header-link">
                     <span id="icon">
                       <img src={window.logoURL} height="47" width="40" />
                       <span id="logo-text">
                         <span id="get">get</span>
                         <span id="ans">answers</span>
                       </span>
                     </span>
                   </Link>
                 ) : (
                   <Link to="/" className="header-link">
                     <span id="icon">
                       <img src={window.logoURL} height="47" width="40" />
                       <span id="logo-text">
                         <span id="get">get</span>
                         <span id="ans">answers</span>
                       </span>
                     </span>
                   </Link>
                 )}

                 <form action="" onSubmit={this.handleSubmit}>
                   <div id="search-bar">
                     <div id="search-icon">
                       <img src={window.searchURL} height="20" width="30" />
                     </div>
                     <div id="search-text">
                       <input
                         type="text"
                         className="searchbar"
                         placeholder="Search..."
                         value={this.state.searchTerm}
                         onChange={this.search()}
                       />
                     </div>
                   </div>
                   <div type="submit">
                   </div>
                 </form>

                   {currentUser ? this.personalGreeting() : this.sessionLinks()}
                
               </div>
             );
           }
  };
export default withRouter(NavBar);


