import React from 'react';

export const TodoForm = (properties) =>
    (
        <form>
            <input type="text" 
            onChange={properties.handleInputChange} 
            value={properties.currentTodo} />
        </form>
    )