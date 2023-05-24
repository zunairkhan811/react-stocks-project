import { useParams } from "react-router-dom";
import details from "../redux/stocksdetails/DetailsApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const StocksDetails = () => {
   const {symbol} = useParams();
   const dispatch = useDispatch();
   const { data, isError, message, isLoading} = useSelector((state)=>state.stocksDetails);
   console.log(data);
   useEffect(()=>{
      dispatch(details(symbol))
    
   },[dispatch,symbol])

   if(isLoading){
    return(
      <div className='list-heading-container'>
        <h1>{message}</h1>
      </div>
    )
  }
  if(isError){
    return(
      <div className='list-heading-container'>
        <h1>{message}</h1>
      </div>
    )
  }



   return(
    <>
      <div className="list-heading-container">
        <h1>{symbol} Stock Details</h1>
      </div>
      <div className="details-container">
        {data.map((item)=>(
          <ul key={item.symbol}>
            <li>
              <h3>
                Symbol
              </h3>
              <h3>
                {item.symbol}
              </h3>
            </li>
            <li>
              <h3>
                Name
              </h3>
              <h3>
                {item.name}
              </h3>
            </li>
            <li>
              <h3>
                Exchange
              </h3>
              <h3>
                {item.exchange}
              </h3>
            </li>
            <li>
              <h3>
                Price
              </h3>
              <h3>
                {item.price}
              </h3>
            </li>
            <li>
              <h3>
                MarketCap
              </h3>
              <h3>
                {item.marketCap}
              </h3>
            </li>
            <li>
              <h3>
                Day-High
              </h3>
              <h3>
                {item.dayHigh}
              </h3>
            </li>
            <li>
              <h3>
                Day-Low
              </h3>
              <h3>
                {item.dayLow}
              </h3>
            </li>
            <li>
              <h3>
                Volume
              </h3>
              <h3>
                {item.volume}
              </h3>
            </li>
            <li>
              <h3>
                Year-High
              </h3>
              <h3>
                {item.yearHigh}
              </h3>
            </li>
            <li>
              <h3>
                Year-Low
              </h3>
              <h3>
                {item.yearLow}
              </h3>
            </li>
          </ul>
          
        ))}
      </div>
      
    </>

   )
  
}
  


export default StocksDetails;
