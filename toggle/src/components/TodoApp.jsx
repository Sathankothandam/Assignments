import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
// import {v4 as uuidv4} from 'uuid';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodo =(newTodo) =>{
        setTodos([
        ...todos,
        newTodo
        // {
        //     id: uuidv4(),
        //     value: newTodo,
        // },
    ]);
    console.log(todos);
    };
    const deleteTodo =(value)=>{
        setTodos(todos.filter((todo) => todo !=value));
    };
  return (
    <div>
        TodoApp
        <TodoInput addTodo ={addTodo} />
        <TodoList>
            {todos.map((todo)=>(
                <TodoItem value ={todo} deleteTodo = {deleteTodo}/>
            ))
            }
            
        </TodoList>
    </div>
  );
};

export default TodoApp;