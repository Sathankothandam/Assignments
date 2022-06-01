import React from 'react';

const TodoItem = ({value,deleteTodo}) => {
  return (
      <li>
          {value}
          <button onClick ={() => deleteTodo(value)}>Delete</button>
      </li>
  );
};

export default TodoItem;