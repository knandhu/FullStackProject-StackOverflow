import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavigationBar = () => (
  <div>
    <Link to="/questions">
      <li>Home</li>
    </Link>
    <li>Public</li>
    <Link to="/questions">
      <li>Get Answers</li>
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
);

export default LeftNavigationBar;