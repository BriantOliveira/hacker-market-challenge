import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HackerMarket from './index';

test('renders home page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <HackerMarket />
    </MemoryRouter>
  );

  expect(screen.getByTestId('home-heading')).toBeInTheDocument();
});

test('renders cart page', () => {
  render(
    <MemoryRouter initialEntries={['/cart']}>
      <HackerMarket />
    </MemoryRouter>
  );

  expect(screen.getByTestId('cart-heading')).toBeInTheDocument();
});
