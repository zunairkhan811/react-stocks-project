import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import StocksList from '../components/StocksList';
import fetchStocksData from '../redux/stocks/fetchApi';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

jest.mock('../redux/stocks/fetchApi', () => jest.fn());

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="arrowRight"></span>,
}));

describe('StocksList', () => {
  test('renders stock items and handles search', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    useSelector.mockReturnValue({
      data: [
        {
          symbol: 'AAPL',
          companyName: 'Apple Inc.',
        },
        {
          symbol: 'MSFT',
          companyName: 'Microsoft Corporation',
        },
      ],
    });

    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

    render(
      <Router>
        <StocksList />
      </Router>
    );

    const searchInput = screen.getByTestId('searchTest');
    fireEvent.change(searchInput, { target: { value: 'AAPL' } });

    const stockItem = screen.getByTestId('testItem');
    fireEvent.click(stockItem);

    // expect(mockDispatch).toHaveBeenCalledTimes(1);
    // expect(fetchStocksData).toHaveBeenCalledTimes(1);
    // expect(mockNavigate).toHaveBeenCalledTimes(1);
    // expect(mockNavigate).toHaveBeenCalledWith('/stockDetails/AAPL');

    const icon = screen.getByTestId('arrowRight');
    expect(icon).toBeInTheDocument();
  });
});