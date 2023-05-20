import { useEffect } from 'react'
import './SubBanner.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function SubBanner(){
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  return (
    <div className='sub-banner-container'>
      <h2 className='sub-banner-title'>About Graces Driving School</h2>
        <hr className='line'/>
      <div id='about-us' className='sub-banner-info'>
        <p className='sub-banner-text'>A Driving School that has taught teens and nervous drivers for over 15 years to overcome the challenges of driving on our traffic congested streets and highways. Teaching teens how to drive does not have to be stressful or dangerous. If you are a nervous driver and can not bear to get in the car with your teen behind the wheel, then we are here to help you.</p>
        <img data-aos='fade-right' src="/assets/grace.png" className='grace-img'  />
      </div>
    </div>
)
}

export default SubBanner