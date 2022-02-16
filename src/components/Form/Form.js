import React from 'react';
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
    <form onSubmit={ handleSubmit(onSubmit) }>
      <input type="text" {...register('description')} placeholder='Insira sua tarefa' />

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

export default Form;