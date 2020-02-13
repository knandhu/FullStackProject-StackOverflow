import React from 'react';

const UserIndexItem = (props) => {
    return (
      
        
          <div key={props.user.id}>{props.user.username}</div>
      
        
      
    );
}

export default UserIndexItem;