
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

describe('HomePage', () => {
  test('renders without crashing', () => {
    render(
    <MemoryRouter>
        <HomePage />
    </MemoryRouter>
    );
  });

  test('displays the welcome message', () => {
    render(
    <MemoryRouter>
        <HomePage />
    </MemoryRouter>
    );
    expect(screen.getByText('Welcome to ComponentCorner')).toBeInTheDocument();
  });

  test('displays the main content', () => {
    render(
    <MemoryRouter>
        <HomePage />
    </MemoryRouter>
    );
    expect(screen.getByText('Why Shop with Us?')).toBeInTheDocument();
    expect(screen.getByText('Quality Products')).toBeInTheDocument();
    expect(screen.getByText('Great Prices')).toBeInTheDocument();
    expect(screen.getByText('Easy Shopping')).toBeInTheDocument();
  });
});
