
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import CartItem from '../CartItem';

describe('CartItem', () => {
  const mockRemove = vi.fn();

  const mockItem = {
    name: 'Wireless Mouse',
    price: 29.99,
    quantity: 2
  };

  test('renders without crashing', () => {
    render(<CartItem {...mockItem} onRemove={mockRemove} />);
  });

  test('displays item name and price', () => {
    render(<CartItem {...mockItem} onRemove={mockRemove} />);

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });

  test('calls remove function when Remove is clicked', () => {
    mockRemove.mockClear();

    render(<CartItem {...mockItem} onRemove={mockRemove} />);

    fireEvent.click(screen.getByRole('button', { name: 'Remove' }));

    expect(mockRemove).toHaveBeenCalledTimes(1);
  });

  test('displays item quantity', () => {
    render(<CartItem {...mockItem} onRemove={mockRemove} />);

    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
    });
});
