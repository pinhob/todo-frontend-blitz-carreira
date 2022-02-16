import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ setTodos }) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    setTodos(todos => [
      ...todos, 
      values
    ])
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <input type="text" {...register('description')} />
      <input type="submit" value="Adicionar" />
    </form>
  );
}

export default Form;