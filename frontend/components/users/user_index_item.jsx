import React from 'react';

const UserIndexItem = (props) => {
    return (
      
        
          <li key={props.user.id}>Name:{props.user.username}</li>
      
        
      
    );
}

export default UserIndexItem;