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
      <h2 className='sub-banner-title'>About<br/> Grace`s Driving School</h2>
        <hr className='line'/>
      <div id='about-us' className='sub-banner-info'>
        <p className='sub-banner-text'>With over 15 years of experience, our driving school specializes in empowering teens and nervous drivers to conquer the challenges of navigating our busy and congested streets and highways. We firmly believe that learning how to drive should never be a source of stress or danger. If you find yourself unable to ride in the car with your teen behind the wheel due to anxiety, rest assured, we are here to provide the support and assistance you need.</p>
        <img data-aos='fade-right' src="/assets/grace.png" className='grace-img'  />
      </div>
    </div>
)
}

export default SubBanner