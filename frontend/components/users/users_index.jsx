import React from 'react';
import UserIndexItem from './user_index_item';

class UsersIndex extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.allUsers();
    }

    render() {
        return (
            <div>
                <ul id='user-details'>
                    <h1>Users' List</h1>
                {this.props.users.map((user, idx) => 
                    <UserIndexItem user={user} key={idx}/>
                )}
                 </ul>
            </div>
        )
    }
}

export default UsersIndex;