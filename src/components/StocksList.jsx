import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchStocksData from '../redux/stocks/fetchApi';

const StocksList = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const {
    data, message, isLoading, isError,
  } = useSelector((store) => store.stocksList);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchStocksData());
    }
  }, [dispatch, data]);

  if (isLoading) {
    return (
      <div className="list-heading-container">
        <h1>{message}</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="list-heading-container">
        <h1>{message}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="list-main-container">
        <div className="list-heading-container">
          <h1>NASDAQ Stocks</h1>
          <input
            type="text"
            placeholder="Search with symbol..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="list-container">
          {data.filter((item) => {
            if (searchText === '') {
              return item;
            }
            if (item.symbol.toLowerCase().includes(searchText.toLowerCase())) {
              return item;
            }
            return null;
          })
            .map((element) => (

              <div role="presentation" key={element.symbol} className="list-items" onClick={() => navigate(`/stockDetails/${element.symbol}`)}>
                <h1>
                  Symbol -
                  {element.symbol}
                </h1>
                <h2>
                  Company Name -
                  {element.companyName}
                </h2>
              </div>

            ))}
        </div>

      </div>

    </>

  );
};

export default StocksList;
