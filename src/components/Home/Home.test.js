import { render, screen, fireEvent } from '@testing-library/react';
import Home from './index';

const mockProducts = [
  { id: 1, name: 'Keyboard', description: 'Mech keyboard', price: 49.99 },
];

test('renders product and handles add to cart', () => {
  const mockAddToCart = jest.fn();

  render(<Home products={mockProducts} addToCart={mockAddToCart} />);

  const addButton = screen.getByTestId('add-to-cart-button-1');
  fireEvent.click(addButton);

  expect(mockAddToCart).toHaveBeenCalledTimes(1);
  expect(mockAddToCart).toHaveBeenCalledWith(mockProducts[0]);
});
