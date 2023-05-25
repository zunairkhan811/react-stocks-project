import renderer from "react-test-renderer";
import StocksDetails from "../components/StocksDetails";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import '@testing-library/jest-dom';

it('StockDetails renders correctly',()=>{
    const tree = renderer.create(
        
        <BrowserRouter>
        <Provider store={store}>
        <StocksDetails />
        </Provider>
            
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})