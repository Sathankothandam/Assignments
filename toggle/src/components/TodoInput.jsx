import React from "react";
import {useState} from "react";


const TodoInput =({addTodo})=>{

    const [value,setValue] = useState("");
    return (
        <div>
            <input
                type ="text"
                value ={value}
                placeholder = "new todo item"
                onChange ={(e) =>{
                    setValue(e.target.value);
                }}
            />
            <button 
                disabled={!value}
                onClick ={()=>{
                    addTodo(value);
                    setValue("");
                }}
                >
                    Add
                </button>
        </div>
    );
};

export default TodoInput;