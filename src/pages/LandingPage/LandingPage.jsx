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
  return (
    <main>
      <NavBar />
      <Banner />
      <SubBanner />
      <Pricing /> 
      <InstagramFeed />
      <ActionBanner />
    </main>
  )
}

export default LandingPage