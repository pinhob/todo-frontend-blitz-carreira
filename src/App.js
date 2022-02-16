import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const mock = [{ description: 'Beber uma breja com Tiones', status: "Pendente" }];

function App() {
  const [todos, setTodos] = useState(mock);

  return (
    <div className="App">
      {console.log(todos)}
      <h1>Todos</h1>
      <Form setTodos={ setTodos } />
      <TodoList todos={ todos } />
    </div>
  );
}

export default App;
