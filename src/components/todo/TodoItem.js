import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (properties) => {
    return (
        <li>
            <input type="checkbox" defaultChecked={properties.isComplete} />{properties.name}
        </li>
    )
}

TodoItem.protoTypes = {
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
    id: PropTypes.number.isRequired
}