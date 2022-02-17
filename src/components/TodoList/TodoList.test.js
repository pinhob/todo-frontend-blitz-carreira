import { render, screen } from '@testing-library/react';
import TodoList from '.';

const mock = [{ description: 'Mock de testes', id: 1 }];

describe('TodoList', () => {

  it('should render the todo list table', () => {
    render(<TodoList todos={ mock } />);

    const table = screen.getByRole('table');

    expect(table).toBeInTheDocument();
  });

  it('should have todo table header', () => {
    render(<TodoList todos={ mock } />);

    const tableHeader = screen.getAllByRole('row')[0];
    const descriptionHeader = screen.getByRole('columnheader', {
      name: /descrição/i
    })

    expect(tableHeader).toBeInTheDocument();
    expect(descriptionHeader).toBeInTheDocument();
  })

  it(`should have ${mock.length} items`, () => {
    render(<TodoList todos={ mock } />);

    const items = screen.getAllByRole('row');
    
    // subtract header row from items length
    const todos = items.length - 1;

    expect(todos).toBe(mock.length);
  });
});