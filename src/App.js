import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo'
import { addTodo, generateId } from './lib/todoHelpers'

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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const newId = generateId()
    const newTodo = { name: this.state.currentTodo, isComplet: false, id: newId }
    const updatedTodos = addTodo(this.state.todos, newTodo)
    //use updatedTodos to update the application state
    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    }
    )
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
            currentTodo={this.state.currentTodo} 
            handleSubmit={this.handleSubmit} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
