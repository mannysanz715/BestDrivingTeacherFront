import './Pricing.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function Pricing () {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
useEffect(()=>{
  Aos.init({duration: 1500})
},[])
  return (
    <>
      <h2 className='pricing-header' id='pricing'>Driving Rates</h2>
        <Link onClick={scrollToTop} className='policies-link' to='/policies#policies-container'>BEFORE BOOKING, CLICK HERE TO GO OVER OUR POLICIES</Link>
        <div className='pricing-card-container'>

        <div data-aos='fade-up' className="reg-class-pricing card">
          <h3 className='rate-title'>2 Hour Lessons</h3>
          <p className='rate-price'>Price: $150</p>
          <p className='rate-description'>Pick up and drop off within the Los Angeles area.</p>
          <p className='rate-description'>Training during the entire lesson.</p>
          <p className='rate-description'>Private lesson with patient and experienced instructors.</p>
          <p className='rate-description'>Confidence with safetey features such as dual controll systems for instructors.</p>
        </div>
        <div data-aos='fade-up' className="drive-test-pricing card end">
          <h3 className='rate-title'>Behind the Wheel Test</h3>
          <p className='rate-price'>Price: $225</p>
          <p className='rate-description'>Pick up within the Los Angeles area 1 hour prior to DMV appointment time.</p>
          <p className='rate-description'>All registration and paper work taken care of with DMV.</p>
          <p className='rate-description'>Vehicle for the driving exam.</p>
          <p className='rate-description'>And drop off in the Los Angeles area.</p>
          <p className='rate-description'><strong>This is a flat rate, whether student passes or fails</strong></p>
        </div>
        </div>
    </>
)
}

export default Pricing