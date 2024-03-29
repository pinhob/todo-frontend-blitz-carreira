import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import EditTodoForm from './components/EditTodoForm';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [isEditingTodo, setIsEditingTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  return (
    <div data-testid="app" className="App">
      <div className='todo-app'>
        <h1 className='header-title'>Lista de tarefas</h1>
        {isEditingTodo
          ? <EditTodoForm
            setTodos={setTodos}
            todos={todos}
            currentTodo={currentTodo}
            setIsEditingTodo={setIsEditingTodo}
          />
          : <Form setTodos={setTodos} />
        }
        {
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setIsEditingTodo={setIsEditingTodo}
            setCurrentTodo={setCurrentTodo}
          />
        }
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
