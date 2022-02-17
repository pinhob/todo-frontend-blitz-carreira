import React from "react";
import './Todo.css';

const Todo = ({ todo, setTodos, setIsEditingTodo, setCurrentTodo }) => {
  console.log(todo);
  const { description, status, date, id } = todo;

  const deleteTodo = () => {
    setTodos((todos) => todos.filter((todo) => todo.description !== description))
  };

  const editTodo = () => {
    setIsEditingTodo(true);
    setCurrentTodo({ description, status, date, id })
  };

  return (
    <tr>
      <td data-testid="description">{description}</td>
      <td data-testid="status">{status}</td>
      <td data-testid="date">{date}</td>
      <td><input data-testid="edit-btn" className="edit-btn" type="button" value="Editar" onClick={editTodo} /></td>
      <td><input data-testid="delete-btn" className="delete-btn" type="button" value="Deletar" onClick={deleteTodo} /></td>
    </tr >
  )
};

export default Todo;
