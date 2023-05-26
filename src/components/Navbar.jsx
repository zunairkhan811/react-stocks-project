import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav>
    <NavLink to="/"><FontAwesomeIcon icon={faArrowLeft} data-testid="mock-test1" /></NavLink>
    <NavLink to="/">Stocks</NavLink>
    <NavLink to="/"><FontAwesomeIcon icon={faMicrophone} data-testid="mock-test2" /></NavLink>
  </nav>
);

export default Navbar;
