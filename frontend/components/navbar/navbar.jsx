import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import QuestionsContainer from './../questions/questions_container';


const NavBar = ({ currentUser, logout, history }) => {
  // { currentUser, logout, history }
  const sessionLinks = () => (
    <nav className="button">
      <Link to="/login"><button className="button2" type="button">Log in</button></Link>
      <Link to="/signup"><button className="button1" type="button">Sign up</button></Link>
      <Link to="/demo"><button className="button1" type="button">Demo User</button></Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      {/* {history.push('/questions')} */}
      <img src="assets/prof-icon.png" height="20" width="30" />
      <img src="assets/inbox-icon.png" height="20" width="30" />
      <img src="assets/trophy-icon.png" height="20" width="30" />
      <img src="assets/ques-icon.png" height="20" width="30" />
      <img src="assets/drop-list-icon.png" height="20" width="30" />
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return (
    <div id="nav">
      <Link to="/" className="header-link">
        <span id="icon">
          <img src={window.logoURL} height="70" width="40" />
          <div id="logo-text">
            <div id="get">get</div>
            <div id="ans">answers</div>
          </div>
        </span>
      </Link>
      <form action="">
        <div id="search-bar">
          <div id="search-icon">
            <img src={window.searchURL} height="20" width="30" />
          </div>
          <div id="search-text">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </form>
      {currentUser ? personalGreeting() : sessionLinks()}
    </div>
  );
  };
  // = ({ currentUser, logout, history }) =>

// class NavBar extends React.Component{
//   constructor(props) {
//     super(props);
//   }
 
//   // { currentUser, logout, history }
//   sessionLinks(){
//     <nav className="button">
//       <Link to="/login"><button className="button2" type="button">Log in</button></Link>
//       <Link to="/signup"><button className="button1" type="button">Sign up</button></Link>
//       <Link to="/demo"><button className="button1" type="button">Demo User</button></Link>
//     </nav>
//   }
//   personalGreeting() {
//     <hgroup className="header-group">
      
//       <img src="assets/prof-icon.png" height="20" width="30" />
//       <img src="assets/inbox-icon.png" height="20" width="30" />
//       <img src="assets/trophy-icon.png" height="20" width="30" />
//       <img src="assets/ques-icon.png" height="20" width="30" />
//       <img src="assets/drop-list-icon.png" height="20" width="30" />
//       <button className="header-button" onClick={this.props.logout}>
//         Log Out
//       </button>
//     </hgroup>;
//   }
//   render() {
//     return (
//       <div id="nav">
//         <Link to="/" className="header-link">
//           <span id="icon">
//             <img src={window.logoURL} height="70" width="40" />
//             <div id="logo-text">
//               <div id="get">get</div>
//               <div id="ans">answers</div>
//             </div>
//           </span>
//         </Link>
//         <form action="">
//           <div id="search-bar">
//             <div id="search-icon">
//               <img src={window.searchURL} height="20" width="30" />
//             </div>
//             <div id="search-text">
//               <input type="text" placeholder="Search..." />
//             </div>
//           </div>
//         </form>
//         {this.props.currentUser ? this.personalGreeting() : this.sessionLinks()}
//       </div>
//     );
//   }
// };
  export default NavBar;
