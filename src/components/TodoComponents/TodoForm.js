import React from 'react';

function TodoForm(props) {
    return (
        <form onSubmit={props.addTodo}>
            <input
                placeholder="...todo"
                value={props.todoInput}
                name="todoInput"
                onChange={props.handleChanges}
            />
            <button>Add Todo</button><button onClick={props.removePurchased}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;