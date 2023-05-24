import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav>
    <NavLink to="/"><FontAwesomeIcon icon={faArrowLeft} /></NavLink>
    <NavLink to="/">Stocks</NavLink>
    <NavLink to="/"><FontAwesomeIcon icon={faMicrophone} /></NavLink>
  </nav>
);

export default Navbar;
