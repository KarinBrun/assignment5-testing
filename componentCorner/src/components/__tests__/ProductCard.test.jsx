import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Wireless Mouse',
    description: 'A comfortable wireless mouse',
    price: 29.99,
    image: 'mouse.jpg'
  };

  const mockAddToCart = vi.fn();

  test('renders without crashing', () => {
    render(
      <ProductCard
        {...mockProduct}
        product={mockProduct}
        onAddToCart={mockAddToCart}
      />
    );
  });

  test('displays product name and price', () => {
    render(
      <ProductCard
        {...mockProduct}
        product={mockProduct}
        onAddToCart={mockAddToCart}
      />
    );

    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });

  test('displays Add to Cart button', () => {
    render(
      <ProductCard
        {...mockProduct}
        product={mockProduct}
        onAddToCart={mockAddToCart}
      />
    );

    expect(
      screen.getByRole('button', { name: 'Add to Cart' })
    ).toBeInTheDocument();
  });

  
  test('calls addToCart when Add to Cart is clicked', () => {
    mockAddToCart.mockClear();

    render(
      <ProductCard
        {...mockProduct}
        product={mockProduct}
        onAddToCart={mockAddToCart}
      />
    );

    const addButton = screen.getByRole('button', {
      name: 'Add to Cart'
    });

    fireEvent.click(addButton);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
