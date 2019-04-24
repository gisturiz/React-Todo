// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

function TodoList(props) {
    return (
      <div className="todo-item">
          <p>
            {props.todoProps}
          </p>
      </div>
    );
  }


  export default TodoList;