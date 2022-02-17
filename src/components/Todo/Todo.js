import React from "react";
import './Todo.css';

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
      <td><input className="edit-btn" type="button" value="Editar" onClick={editTodo} /></td>
      <td><input className="delete-btn" type="button" value="Deletar" onClick={deleteTodo} /></td>
    </tr >
  )
};

export default Todo;
