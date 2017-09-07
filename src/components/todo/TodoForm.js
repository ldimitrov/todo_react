import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = (properties) => (
    <form>
        <input type="text"
            onChange={properties.handleInputChange}
            value={properties.currentTodo} />
    </form>
)

TodoForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
}