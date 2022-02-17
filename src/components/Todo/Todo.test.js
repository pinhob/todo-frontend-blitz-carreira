import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '.';

const mock = [{ description: 'Mock de testes', status: 'Pronto', date: '16/02/2022', id: 1 }];

describe('Todo', () => {
  it('should render todo', () => {
    render(<Todo key={ mock.id } todo={ mock } />);

    const todoRow = screen.getAllByRole('row');

    expect(todoRow.length).toEqual((mock.length));
  });

  it('should render all the todo fields and buttons', () => {
    render(<Todo key={ mock.id } todo={ mock } />);

    console.log(mock);

    const description = screen.getByTestId('description');
    const status = screen.getByTestId('status');
    const date = screen.getByTestId('date');
    const buttons = screen.getAllByRole('button');
    const editBtn = buttons[0];
    const deleteBtn = buttons[1];

    expect(description).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });
});