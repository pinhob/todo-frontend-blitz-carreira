import React from "react";

const Todo = ({ description, status, date, setTodos, id, setIsEditingTodo, setCurrentTodo }) => {
  const deleteTodo = () => {
    setTodos((todos) => todos.filter((todo) => todo.description !== description))
  };

  const editTodo = () => {
    setIsEditingTodo(true);
    setCurrentTodo({ description, status, date, id })
  };

  return (
    <tr>
      <td>{description}</td>
      <td>{status}</td>
      <td>{date}</td>
      <td><input type="button" value="Editar" onClick={editTodo} /></td>
      <td><input type="button" value="Deletar" onClick={deleteTodo} /></td>
    </tr >
  )
};

export default Todo;
