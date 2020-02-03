import React from 'react';


const UserItem = (props) => {
    return (
        <div>
            <h3>{props.user.name}</h3>
            <h3>{props.user.email}</h3>
            <h3>{props.user.username}</h3>
            <h3>{props.user.phone}</h3>
            <hr />
        </div>
    )
};

export default UserItem;