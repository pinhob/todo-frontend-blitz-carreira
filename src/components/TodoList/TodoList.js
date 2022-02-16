import React from "react";
import DeleteButton from "../DeleteButton";

const TodoList = ({ todos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Status</th>
          <th>Data</th>
          <th>Editar/Deletar</th>
        </tr>
      </thead>

      <tbody>
        {todos.map(({ description, status, date }) => (
          <tr key={ Math.random() * 1000 }>
            <td>{ description }</td>
            <td>{ status }</td>
            <td>{ date }</td>
            <td><DeleteButton /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default TodoList;