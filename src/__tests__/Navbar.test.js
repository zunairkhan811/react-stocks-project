import renderer from "react-test-renderer";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it('Navbar renders correctly',()=>{
    const tree = renderer.create(
        
        <BrowserRouter>
          <Navbar />  
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})