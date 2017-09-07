import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm } from './components/todo/TodoForm'

class App extends Component {

  constructor() {
    super()
    this.state = {
      //list of todos in state object
      todos: [
        { id: 1, name: 'Learn React', isComplete: true },
        { id: 2, name: 'Build a React App', isComplete: false },
        { id: 3, name: 'Evaluate the end result', isComplete: false }
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      currentTodo: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo} />
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo =>
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete} />{todo.name}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
