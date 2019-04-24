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
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todoOnState: [...this.state.todoOnState, this.state.todoInput],
      todoInput: "",
    });
  };

  render() {
    return (
      <div>

        <h2>Todo List: MVP</h2>

        <div className="todo-list">
          {this.state.todoOnState.map((todoItem, index) => (
            <TodoList todoProps={todoItem} key={index} />
          ))}
        </div>

        <TodoForm todoInput={this.state.todoInput} handleChanges={this.handleChanges} addTodo={this.addTodo} />

      </div>
    );
  }
}

export default App;
