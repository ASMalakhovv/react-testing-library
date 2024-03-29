import React from 'react';

export const User = ({user, onDelete}) => {
    return (
        <div>
            {user.name}
            <button id="user-delete" onClick={() => onDelete(user.id)}>delete</button>
        </div>
    );
};
