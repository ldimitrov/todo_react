import React from 'react';

export const TodoItem = (properties) => {
    return (
        <li>
            <input type="checkbox" defaultChecked={properties.isComplete} />{properties.name}
        </li>
    )
}