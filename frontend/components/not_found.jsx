import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => (
    <div>
        <img src="assets/PageNotFound.png" style={{ width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative', top:50 }} />
        <center style={{position:'relative', top:50}}><Link to="/questions">Return to Home Page</Link></center>
    </div>
);
export default NotFound;