import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoOnState: todoList,
      todoInput: "",
      purchased: false,
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.todoInput, 
      id: Date.now(),
      purchased: false,
    };

    this.setState({
      todoOnState: [...this.state.todoOnState, newTodo],
      todoInput: "",
    });
  };

  toggleComplete = id => {
    this.setState({
      todoOnState: this.state.todoOnState.map(event =>
        event.id === id ? { ...event, purchased: !event.purchased } : event
      )
    });
  };

  removePurchased = (event) => {
    event.preventDefault();
    this.setState({
      todoOnState: this.state.todoOnState.filter(event => !event.purchased)
    });
  };


  render() {
    return (
      <div>

        <h1>Todo List</h1>

        <div className="todo-list">
          {this.state.todoOnState.map((todoItem, index) => (
            <TodoList todoProps={todoItem} 
            key={index} 
            toggleComplete={this.toggleComplete} />
          ))}
        </div>

        <TodoForm todoInput={this.state.todoInput} 
        handleChanges={this.handleChanges} 
        addTodo={this.addTodo} 
        removePurchased={this.removePurchased} />

      </div>
    );
  }
}

export default App;
