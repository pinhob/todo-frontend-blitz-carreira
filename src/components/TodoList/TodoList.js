import React from "react";


const TodoList = ({ todos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Status</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        {todos.map(({ description, status, date }) => (
          <tr key={ Math.random() * 1000 }>
            <td>{ description }</td>
            <td>{ status }</td>
            <td>{ date }</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default TodoList;