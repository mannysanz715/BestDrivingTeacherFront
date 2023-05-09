// import AboutSchool from "../../components/AboutSchool/AboutSchool"
import Banner from "../../components/Banner/Banner"
// import Mission from "../../components/Mission/Mission"
import NavBar from "../../components/NavBar/NavBar"
import Pricing from "../../components/Pricing/Pricing"
import SubBanner from "../../components/SubBanner/SubBanner"

//styling
import './LandingPage.css'

function LandingPage() {
  return (
    <main>
      <NavBar />
      <Banner />
      <SubBanner />
      <Pricing /> 
      {/* 
      <Mission />
      */} 
    </main>
  )
}

export default LandingPage