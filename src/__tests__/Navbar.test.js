import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

jest.mock('react-router-dom', () => ({
  NavLink: ({ children }) => <span>{children}</span>,
}));

describe('Navbar', () => {
  test('renders navigation links with icons', () => {
    render(
      <Navbar />,
    );

    const arrowLeftIcon = screen.getByTestId('mock-test1');
    expect(arrowLeftIcon).toBeInTheDocument();

    const microphoneIcon = screen.getByTestId('mock-test2');
    expect(microphoneIcon).toBeInTheDocument();

    const stocksLink = screen.getByText('Stocks');
    expect(stocksLink).toBeInTheDocument();
  });
});
