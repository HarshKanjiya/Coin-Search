import './nav-bar.styles.css'
import {FaCoins} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return ( 
        <Link to="/" className='nav-bar'>
            <FaCoins className='icon'/>
            
            <h1>coin <span className='blue'>Search</span></h1>
            
        </Link>
     );
}
 
export default NavBar;

