import { useState } from "react"
// import AboutSchool from "../../components/AboutSchool/AboutSchool"
import Banner from "../../components/Banner/Banner"
import InstagramFeed from "../../components/InstagramFeed/InstagramFeed"
// import Mission from "../../components/Mission/Mission"
import NavBar from "../../components/NavBar/NavBar"
import Pricing from "../../components/Pricing/Pricing"
import SubBanner from "../../components/SubBanner/SubBanner"
import ActionBanner from "../../components/ActionBanner/ActionBanner"
//styling
import './LandingPage.css'

function LandingPage() {
  const [ isOpen, setIsOpen ] = useState(false)
  function closeMenu(e){
    if((e.target.className == 'navbar') || (e.target.className == 'menu-buttons') || (e.target.className == 'navbar')){
      setIsOpen(true)
      console.log('hello')
    } else setIsOpen(false)
  }
  return (
    <main onClick={closeMenu}>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner />
      <SubBanner />
      <Pricing /> 
      <InstagramFeed />
      <ActionBanner />
    </main>
  )
}

export default LandingPage