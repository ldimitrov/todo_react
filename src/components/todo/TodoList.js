import React from 'react';
import {TodoItem} from './TodoItem'

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