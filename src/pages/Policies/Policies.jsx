import './Policies.css'
import NavBar from '../../components/NavBar/NavBar'
import PoliciesList from '../../components/Policies/Policies'
import { useState } from 'react'
const Policies = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  function closeMenu(e){
    if((e.target.className == 'menu-buttons')){
      setIsOpen(!isOpen)
      console.log('hello')
    } else setIsOpen(false)
  }
  return (
    <div className='policies-main' onClick={closeMenu}>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <PoliciesList />
    </div>
)
}

export default Policies