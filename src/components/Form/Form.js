import React, { useState } from 'react';
import './Form.css'
import { useForm } from 'react-hook-form';

const Form = ({ setTodos }) => {
  const { handleSubmit, register } = useForm();
  const [todoValue, setTodoValue] = useState('');

  const handleChange = (event) => {
    setTodoValue(event.target.value);
  }

  const onSubmit = ({ description, status }) => {
    const date = new Date();

    setTodos(todos => [
      ...todos, 
      { 
        description,
        status,
        date,
        id: todos.length + 1
      },
    ])

    setTodoValue('');
  };

  return (
    <form className='add-todo-form' onSubmit={ handleSubmit(onSubmit) }>
      <input
        required
        className='input-todo-description'
        value={ todoValue }
        // onChange={ handleChange }
        {...register('description', {
          onChange: handleChange
        })}
        type="text"
        placeholder='Insira sua tarefa' />

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