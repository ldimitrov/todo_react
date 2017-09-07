import React from 'react';
import {TodoItem} from './TodoItem'
import PropTypes from 'prop-types';

export const TodoList = (properties) => {
    return (
        <div className="Todo-List">
        <ul>
          {properties.todos.map(todo =>
          //spread operator to take all properties of todo and pass them to the component
            <TodoItem key={todo.id} {...todo}/>
          )}
        </ul>
      </div>
    )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}