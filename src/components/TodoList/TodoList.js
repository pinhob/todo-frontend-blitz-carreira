import React from "react";
import Todo from "../Todo";

const TodoList = ({ todos, setTodos, setIsEditingTodo, setCurrentTodo }) => {
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
        {todos.map(({ description, status, date, id }) => {
          return <Todo
            key={ id }
            description={ description }
            status={ status }
            date={ date }
            setTodos={ setTodos }
            id={ id }
            setIsEditingTodo={ setIsEditingTodo }
            setCurrentTodo={ setCurrentTodo }
          />
        })}
      </tbody>
    </table>
  )
};

export default TodoList;