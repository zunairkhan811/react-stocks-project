import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/rootreducer'; // Import your Redux root reducer
import StocksDetails from '../components/StocksDetails';

describe('StocksDetails Component', () => {
  test('renders stock details correctly', () => {
    const mockSymbol = 'Loading...';
    const mockData = [
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        exchange: 'NASDAQ',
        price: 150.0,
        marketCap: '2T',
        dayHigh: 155.0,
        dayLow: 145.0,
        volume: 1000000,
        yearHigh: 160.0,
        yearLow: 120.0,
      },
    ];
    const mockStore = createStore(rootReducer, applyMiddleware(thunk));
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({ symbol: mockSymbol }),
    }));
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useSelector: jest.fn().mockReturnValue({
        data: mockData,
        isError: false,
        message: '',
        isLoading: false,
      }),
    }));
    render(
      <Provider store={mockStore}>
        <StocksDetails />
      </Provider>,
    );
    expect(screen.getByRole('heading', { name: new RegExp(mockSymbol) })).toBeInTheDocument();
  });
});
