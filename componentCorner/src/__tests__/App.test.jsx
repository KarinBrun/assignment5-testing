
import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import App from '../App';

describe('App cart state and localStorage', () => {
  const mockCart = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://placehold.co/600x400',
      description: 'Premium noise-cancelling headphones with 30-hour battery life'
    }
  ];

  let storage = {};

  beforeEach(() => {
    storage = {};

    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(
      (key) => storage[key] ?? null
    );

    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(
      (key, value) => {
        storage[key] = String(value);
      }
    );

    window.history.pushState({}, '', '/');
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test('renders without crashing', () => {
    render(<App />);
    expect(
    screen.getByRole('heading', { name: 'ComponentCorner', level: 1 })
    ).toBeInTheDocument();
  });

  test('loads saved cart from localStorage', () => {
    storage.cart = JSON.stringify(mockCart);

    window.history.pushState({}, '', '/cart');
    render(<App />);

    expect(localStorage.getItem).toHaveBeenCalledWith('cart');
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
  });

  test('saves cart changes to localStorage', async () => {
    window.history.pushState({}, '', '/products');
    render(<App />);

    const addButtons = screen.getAllByRole('button', {
      name: /add to cart/i
    });

    fireEvent.click(addButtons[0]);

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'cart',
        JSON.stringify(mockCart)
      );
    });
  });

  test('useEffect saves the initial cart state', async () => {
    storage.cart = JSON.stringify(mockCart);

    render(<App />);

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'cart',
        JSON.stringify(mockCart)
      );
    });
  });
});
