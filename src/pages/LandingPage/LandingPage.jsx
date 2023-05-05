import AboutSchool from "../../components/AboutSchool/AboutSchool"
import Banner from "../../components/Banner/Banner"
import Mission from "../../components/Mission/Mission"
import Pricing from "../../components/Pricing/Pricing"
import SubBanner from "../../components/SubBanner/SubBanner"

//styling
import './LandingPage.css'

function LandingPage() {
  return (
    <main>
      <h1 className="page-title">Grace Driving Instructor</h1>
      <Banner />
      <SubBanner />
      <AboutSchool />
      <Mission />
      <Pricing />
    </main>
  )
}

export default LandingPage