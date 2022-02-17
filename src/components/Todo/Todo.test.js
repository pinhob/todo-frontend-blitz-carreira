import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '.';

const mock = { description: 'Mock de testes', status: 'Pronto', date: '16/02/2022', id: 1 };

describe('Todo', () => {
  it('should render todo', () => {
    render(<Todo key={ mock.id } todo={ mock } />);

    const todo = screen.getByRole('row');

    expect(todo).toBeInTheDocument();
  });

  it('should render all the todo fields and buttons', () => {
    render(<Todo key={ mock.id } todo={ mock } />);

    const description = screen.getByTestId('description');
    const status = screen.getByTestId('status');
    const date = screen.getByTestId('date');
    const editBtn = screen.getByTestId('edit-btn');
    const deleteBtn = screen.getByTestId('delete-btn');

    expect(description).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });

  it('should call setTodos to remove item when delete button is clicked', () => {
    const setTodos = jest.fn();
    render(<Todo key={ mock.id } todo={ mock } setTodos={setTodos} />);

    const deleteBtn = screen.getByTestId('delete-btn');

    expect(deleteBtn).toBeInTheDocument();

    fireEvent.click(deleteBtn);

    expect(setTodos).toHaveBeenCalled();
  })

  it('should call state functions when edit button is clicked', () => {
    const setIsEditingTodo = jest.fn();
    const setCurrentTodo = jest.fn();

    render(<Todo
      key={ mock.id }
      todo={ mock }
      setIsEditingTodo={setIsEditingTodo}
      setCurrentTodo={ setCurrentTodo }
    />);

    const editBtn = screen.getByTestId('edit-btn');
    
    expect(editBtn).toBeInTheDocument();

    fireEvent.click(editBtn);

    expect(setIsEditingTodo).toHaveBeenCalled();
    expect(setCurrentTodo).toHaveBeenCalled();
  })
});