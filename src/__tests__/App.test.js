import App from "../App";
import store from "../redux/store";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';

it('renders correctly',()=>{
    const tree = renderer.create(
        <Provider store = {store}>
            <App />
        </Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot();
})