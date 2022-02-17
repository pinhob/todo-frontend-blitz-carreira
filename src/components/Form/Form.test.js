import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import Form from '.';

describe('Form', () => {
  it('should render the form elements', () => {
    render(<Form />);

    const descriptionInput = screen.getByRole('textbox');
    const statusInput = screen.getByRole('combobox');
    const button = screen.getByRole('button');

    expect(descriptionInput).toBeInTheDocument();
    expect(statusInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it(`should not call the callback setTodos function`, () => {
    const setTodos = jest.fn();
    render(<Form setTodos={ setTodos } />);

    expect(setTodos).not.toHaveBeenCalled();
  });

  it(`should call the callback setTodos function`, async () => {
    const setTodos = jest.fn();
    render(<Form setTodos={ setTodos } />);

    const descriptionInput = screen.getByRole('textbox');
    const statusInput = screen.getByRole('combobox');
    const button = screen.getByRole('button');

    fireEvent.change(descriptionInput, { target: { value: 'Teste' } });

    fireEvent.change(statusInput, { target: { value: 'Pronto' } })

    fireEvent.click(button);

    await waitFor(() => expect(setTodos).toHaveBeenCalled());
  });
});