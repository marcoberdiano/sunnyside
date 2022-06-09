import logo from '../../images/logo.svg';
import iconHamburger from '../../images/icon-hamburger.svg';
import HamburgerMenu from './HamburgerMenu';
import DesktopMenu from './DesktopMenu';
import { useState } from 'react';
const Navbar = () => {
    const [show, setShow] = useState(false);
    return ( 
        <nav className='nav'>
            <div className='nav-container'>
                <img src={logo} alt="logo" className='logo' />
                <img src={iconHamburger} alt="icon hamburger" className='icon-Hamburger' onClick={()=>setShow(!show)} />
                <DesktopMenu/>
            </div>
            { show && <HamburgerMenu/>}
        </nav>
     );
}
 
export default Navbar;