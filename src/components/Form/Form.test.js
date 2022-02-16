import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import Form from '.';

describe('Form', () => {
  it('should render the form elements', () => {
    render(<Form />);

    const textInput = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    expect(textInput).toBeInTheDocument();
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

    const textInput = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    fireEvent.change(textInput, {
      target: {
        value: 'Teste'
      }
    });

    fireEvent.click(button);

    await waitFor(() => expect(setTodos).toHaveBeenCalled());
  });
});