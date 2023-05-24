import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchStocksData from "../redux/stocks/fetchApi";

const StocksList = () => {
  const dispatch = useDispatch();
  const stocksList = useSelector((state)=>state.stocksList.data);
  console.log(stocksList);
  useEffect(()=>{
    if(stocksList.length === 0){
      dispatch(fetchStocksData())
    }
     
    
    
  },[dispatch]);
  
  return (
    <div>
      hello world
    </div>
  )
}

export default StocksList;
