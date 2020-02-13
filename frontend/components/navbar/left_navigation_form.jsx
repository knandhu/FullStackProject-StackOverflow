import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavigationBar = () => (
  <div id='leftnav'>
    <Link to="/questions">
      <li>Home</li>
    </Link>
    <li>Public</li>
    <div id='public'>
      <Link to="/questions">
        <div id='globe'>
        <img id='glbimg' src="assets/globefinal.png" height='19' width='19' alt=""/>
          <li>Get Answers</li>
        </div>
    </Link>
    <nav>
      <Link to="/tags">
        <li>Tags</li>
      </Link>
        </nav>
        <Link to='/users'>
            <li>Users</li>
      </Link>
    </div>
  </div>
);

export default LeftNavigationBar;