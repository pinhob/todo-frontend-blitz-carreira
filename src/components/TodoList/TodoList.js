import React from "react";


const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ description }) => {
        return <li key={ description }>{ description }</li>
      })}
    </ul>
  )
};

export default TodoList;