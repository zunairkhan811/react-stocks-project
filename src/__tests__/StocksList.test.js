import renderer from "react-test-renderer";
import StocksList from "../components/StocksList";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import '@testing-library/jest-dom';

it('StockList renders correctly',()=>{
    const tree = renderer.create(
        
        <BrowserRouter>
        <Provider store={store}>
        <StocksList />
        </Provider>
            
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})