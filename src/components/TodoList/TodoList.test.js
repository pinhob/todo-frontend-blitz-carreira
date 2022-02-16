import { render, screen } from '@testing-library/react';
import TodoList from '.';

const mock = [{ description: 'Beber uma breja com Tiones' }];

describe('TodoList', () => {

  it('should render the list', () => {
    render(<TodoList todos={ mock } />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  it(`should have ${mock.length} items`, () => {
    render(<TodoList todos={ mock } />);

    const items = screen.getAllByRole('listitem');

    expect(items.length).toBe(mock.length);
  });
});