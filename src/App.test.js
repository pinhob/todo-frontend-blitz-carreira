import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render the application', () => {
    render(<App />);

    const app = screen.getByTestId('app');

    expect(app).toBeInTheDocument();
  });

  it('should have header', () => {
    render(<App />);

    const header = screen.getByRole('heading', {
      name: /lista de tarefas/i
    });

    expect(header).toBeInTheDocument();
  });

  it('should render form component elements', ()=> {
    render(<App />);

    const descriptionInput = screen.getByRole('textbox');
    const statusInput = screen.getByRole('combobox');
    const addButton = screen.getByRole('button', {
      name: /\+/i
    })

    expect(descriptionInput).toBeInTheDocument();
    expect(statusInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  })

  it('should render footer', () => {
    render(<App />);

    const footer = screen.getByText(/criado por para a/i);

    expect(footer).toBeInTheDocument();
  })
});
