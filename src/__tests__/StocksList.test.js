import React from 'react';
import PropTypes from 'prop-types';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import StocksList from '../components/StocksList';

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
  FontAwesomeIcon: () => <span data-testid="arrowRight" />,
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
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Router>
        <StocksList />
      </Router>,
    );

    const searchInput = screen.getByTestId('searchTest');
    fireEvent.change(searchInput, { target: { value: 'AAPL' } });
    const stockItem = screen.getByTestId('testItem');
    fireEvent.click(stockItem);
    const icon = screen.getByTestId('arrowRight');
    expect(icon).toBeInTheDocument();
  });
});

StocksList.propTypes = {
  children: PropTypes.node,
};

StocksList.defaultProps = {
  children: null,
};
