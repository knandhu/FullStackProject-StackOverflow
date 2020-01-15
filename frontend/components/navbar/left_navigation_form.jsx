import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavigationBar = () => (
    <div>
        <Link to='/questions'>
            <li>Home</li>
        </Link>
        <li>Public</li>
        <Link to='/questions'>
            <li>Stack Oveflow</li>
        </Link>
        <Link to='/tags'>
            <li>Tags</li >
        </Link>
    <li>Users</li >
    </div>
);

export default LeftNavigationBar;