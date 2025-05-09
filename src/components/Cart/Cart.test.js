import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './index';

const cartItems = [
  { id: 1, name: 'Mouse', description: 'Wireless mouse', price: 29.99 },
];

test('renders cart item and handles removal', () => {
  const mockRemove = jest.fn();

  render(<Cart cart={cartItems} removeFromCart={mockRemove} />);

  expect(screen.getByText('Mouse')).toBeInTheDocument();

  const removeButton = screen.getByTestId('remove-from-cart-button-1');
  fireEvent.click(removeButton);

  expect(mockRemove).toHaveBeenCalledWith(1);
});
