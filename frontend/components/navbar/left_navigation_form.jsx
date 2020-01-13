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
        <li>Tags</li >
    <li>Users</li >
    </div>
);

export default LeftNavigationBar;