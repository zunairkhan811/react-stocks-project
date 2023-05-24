import { NavLink } from "react-router-dom";
import { faArrowLeft, faMicrophone } from "@fortawesome/free-solid-svg-icons";
const Navbar =()=>{
  return(
    <nav>
        <NavLink to={'/'}>{faArrowLeft}</NavLink>
        <NavLink to={'/'}>Stocks</NavLink>
        <NavLink to={'/'}>{faMicrophone}</NavLink>
    </nav>
  )
}

export default Navbar;
