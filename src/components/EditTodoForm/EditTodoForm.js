import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditTodoForm = ({ setTodos, todos, setIsEditingTodo, currentTodo: { description, date, id } }) => {
  const { handleSubmit, register } = useForm();
  const [ todoValue, setTodoValue ] = useState(description);
  
  const onSubmit = ({ description: editedDescription, status: editedStatus }) => {
    const editedTodo = {
      description: editedDescription,
      status: editedStatus, 
      date, 
      id
    };

    const uptadedTodoList = todos.map((todo) => todo.id === id ? editedTodo : todo);
    
    setIsEditingTodo(false);
    setTodos(uptadedTodoList);
  };

  const editTodoValue = (event) => {
    setTodoValue(event.target.value);
  }
  
  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <input
        type="text"
        placeholder='Edite'
        defaultValue={ todoValue }
        onChange={ editTodoValue }
        {...register('description')}  
      />

      <label htmlFor="status">
        <select name="status" {...register('status')}>
          <option value="Pendente">Pendente</option>
          <option value="Pronto">Pronto</option>
          <option value="Em progresso">Em progresso</option>
        </select>
      </label>

      <input type="submit" value="Adicionar" />
    </form>
  );
}

export default EditTodoForm;