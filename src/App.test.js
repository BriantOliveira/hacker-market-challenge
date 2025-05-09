import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HackerMart navbar', () => {
  render(<App />);
  const homeLink = screen.getByTestId('home-link');
  const cartLink = screen.getByTestId('cart-link');
  expect(homeLink).toBeInTheDocument();
  expect(cartLink).toBeInTheDocument();
});
