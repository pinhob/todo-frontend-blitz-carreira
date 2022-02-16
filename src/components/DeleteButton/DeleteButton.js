import React from "react";

const DeleteButton = ({ description, setTodos }) => {
  const deleteTodo = () => {
    setTodos((todos) => todos.filter((todo) => todo.description !== description))
  };

  return (
    <input type="button" value="Deletar" onClick={ deleteTodo } />
  );
};

export default DeleteButton;
