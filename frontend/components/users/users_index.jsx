import React from 'react';
import UserIndexItem from './user_index_item';
import LeftNavigationBar from './../navbar/left_navigation_form';
import Footer from './../home/footer';


class UsersIndex extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.allUsers();
    }

    render() {
        return (
            <div id="user-page">
                <div id="main">
                    <div id="left-nav">
                        <LeftNavigationBar />
                    </div>
                    <br />
                    <div id="users">
                    <h3>Users</h3>
                <div id='user-details'>
                {this.props.users.map((user, idx) => 
                    <UserIndexItem user={user} key={idx}/>
                )}
                 </div>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default UsersIndex;