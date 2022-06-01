import React from 'react';
// import TodoItem from './TodoItem';


const TodoList = ({children}) => {
  return (
    // <div>
       
        <ul>
            {/* {todos.map((todo)=> (
                <TodoItem key ={todo.id} value ={todo.value} deleteTodo ={deleteTodo} />
            ))} */}
             <h3>Here is your TODO List</h3>
            {children}

        </ul>
    // </div>
  );
};


export default TodoList;