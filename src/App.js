import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import EditTodoForm from './components/EditTodoForm';

const date = Date.now();
const mock = [{ description: 'Beber uma breja com Tiones', status: "Pendente", date, id: 1 }];

function App() {
  const [todos, setTodos] = useState(mock);
  const [isEditingTodo, setIsEditingTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  return (
    <div className="App">
      <h1>Todos</h1>
      { isEditingTodo
        ? <EditTodoForm
            setTodos={ setTodos }
            todos={ todos }
            currentTodo={ currentTodo }
            setIsEditingTodo={ setIsEditingTodo }
          />
        : <Form setTodos={ setTodos } />
      }
      <TodoList
        todos={ todos }
        setTodos={ setTodos }
        setIsEditingTodo={ setIsEditingTodo }
        setCurrentTodo={ setCurrentTodo }
      />
    </div>
  );
}

export default App;
