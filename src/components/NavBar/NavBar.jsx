import './NavBar.css'
import { Link } from 'react-router-dom'
function NavBar(){
  return (
    <nav>
      <Link to='/'><img className='logo' src="/assets/logo.png" alt="school-logo"/></Link>
      <img className='menu-buttons' src="/assets/menuButtons.png" alt="menu"/>
    </nav>
)
}

export default NavBar