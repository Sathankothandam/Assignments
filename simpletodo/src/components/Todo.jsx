import React, {useState} from "react";
import TodoItem from "./TodoItem";
import styles from "./todo.module.css";
const Todo =()=>{
    const [value,setValue] = useState("");
    const [todos,setTodos] = useState([]);
    const onDelete =(id) =>{
        let newTodos = todos.filter((todo) =>todo.id !== id);
        setTodos(newTodos);
    }
    return (
        <div>       Todo
            <input
                value ={value}
                onChange ={(e) =>{
                    setValue(e.target.value);
                }}
                onKeyDownCapture={(e)=>{
                    if(e.key ==="Enter") {
                        setTodos([...todos, {id: Date.now(), value: value, isCompleted: false}]);
                        setValue("");
                    } }}
                />
                    <div className ={styles.todoList}>
                    {todos.map((todo)=>(
                        <TodoItem key ={todo.id} todo={todo} onDelete={onDelete} />
                    ))}
                    </div>
            </div>
        );
};
export default Todo;