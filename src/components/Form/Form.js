import React from 'react';
import './Form.css'
import { useForm } from 'react-hook-form';

const Form = ({ setTodos }) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = ({ description, status }) => {
    const date = Date.now();

    setTodos(todos => [
      ...todos, 
      { 
        description,
        status,
        date,
        id: todos.length + 1
      },
    ])
  };

  return (
    <form className='add-todo-form' onSubmit={ handleSubmit(onSubmit) }>
      <input className='input-todo-description' type="text" {...register('description')} placeholder='Insira sua tarefa' />

      <label className="select-todo-status" htmlFor="status">
        <select name="status" {...register('status')}>
          <option value="Pendente">Pendente</option>
          <option value="Pronto">Pronto</option>
          <option value="Em progresso">Em progresso</option>
        </select>
      </label>

      <input className="submit-form-btn" type="submit" value="+" />
    </form>
  );
}

export default Form;