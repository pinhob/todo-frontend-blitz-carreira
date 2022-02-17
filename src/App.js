import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import EditTodoForm from './components/EditTodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [isEditingTodo, setIsEditingTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  return (
    <div className="App">
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
        {console.log(todos.length)}
        {
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setIsEditingTodo={setIsEditingTodo}
          setCurrentTodo={setCurrentTodo}
        />
        }
      </div>
    </div>
  );
}

export default App;
