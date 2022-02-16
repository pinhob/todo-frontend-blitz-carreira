import React from "react";
import Todo from "../Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Status</th>
          <th>Data</th>
          <th>Editar</th>
          <th>Deletar</th>
        </tr>
      </thead>

      <tbody>
        {todos.map(({ description, status, date }) => {
          const randomId = Math.random() * 1000;

          return <Todo
            key={ randomId }
            description={ description }
            status={ status }
            date={ date }
            setTodos={ setTodos }
            id={ randomId }
          />
        })}
      </tbody>
    </table>
  )
};

export default TodoList;