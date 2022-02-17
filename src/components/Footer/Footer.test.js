import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('should render paragraph', () => {
    render(<Footer />);

    const footer = screen.getByText(/criado por para a/i);

    expect(footer).toBeInTheDocument();
  })

  it('should have link to my profile', () => {
    render(<Footer />);

    const link = screen.getByRole('link', {
      name: /bruno pinho/i
    });

    expect(link).toBeInTheDocument();
    expect(link.href).toBe('https://github.com/pinhob');
  });
})
