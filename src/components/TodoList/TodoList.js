import React from "react";
import './TodoList.css';
import Todo from "../Todo";

const TodoList = ({ todos, setTodos, setIsEditingTodo, setCurrentTodo }) => {
  const ZERO = 0;

  return (
    <table>
      <thead className="header-todo-list">
        <tr>
          <th>Descrição</th>
          <th>Status</th>
          <th>Data</th>
          <th>Editar</th>
          <th>Deletar</th>
        </tr>
      </thead>

      
      <tbody>
        {
          todos.length !== ZERO 
            ? todos.map((todo) => {
              return <Todo
                key={ todo.id }
                todo={ todo }
                setTodos={ setTodos }
                setIsEditingTodo={ setIsEditingTodo }
                setCurrentTodo={ setCurrentTodo }
              />
              })
            : <tr><td>Nenhuma tarefa adicionada</td></tr>
        }
      </tbody>
    </table>
  )
};

export default TodoList;