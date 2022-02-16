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
        {todos.map(({ description, status, date }) => (
          <Todo
            key={ Math.random() * 1000 }
            description={ description }
            status={ status }
            date={ date }
            setTodos={ setTodos }
          />
        ))}
      </tbody>
    </table>
  )
};

export default TodoList;