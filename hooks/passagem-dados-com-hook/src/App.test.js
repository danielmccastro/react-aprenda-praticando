import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderizacao do link para Learn React', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
