import './Policies.css'
import NavBar from '../../components/NavBar/NavBar'

import PoliciesList from '../../components/Policies/Policies'
import { useState } from 'react'
const Policies = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  function closeMenu(e){
    if((e.target.className == 'menu-buttons')){
      setIsOpen(!isOpen)
    } else setIsOpen(false)
  }
  return (
    <div className='policies-main' onClick={closeMenu}>
      <NavBar isOpen={isOpen} location='policies' setIsOpen={setIsOpen} />
      <PoliciesList />
    </div>
)
}

export default Policies