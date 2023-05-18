/* eslint-disable react/prop-types */
import './NavBar.css'
import { Link } from 'react-router-dom'
function NavBar({ isOpen }){

  

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}


  return (
    <>
    <nav className='navbar'>
      <Link to='/'><img className='logo' src="/assets/logo.png" alt="school-logo"/></Link>
    <img className='menu-buttons'  src="/assets/menuButtons.png" alt="menu"/>
    </nav>
    { isOpen && 
      <ul  className='drop-menu'>
        <a  href="#top"> <li className="menu-item">Home</li></a>
        <a  href="#about-us"><li className="menu-item">About Us</li></a>
        <a  href="#pricing"><li className="menu-item">Pricing</li></a>
        <Link onClick={scrollToTop} to="/policies"><li className="menu-item">Policies</li></Link>
      </ul>
    }
      </>
)
}

export default NavBar