import './Policies.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Policies = () => {
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  return (
    <div  className='policies-container'>
      <h1 className='policies-heading'>Policies List</h1>
      <ul className="policies-list">
        <li data-aos='fade-up' className='policy-item'>All Packages are paid upfront.</li>
        <li data-aos='fade-up' className='policy-item'>Package classes must be scheduled within 6 months of the purchase date.</li>
        <li data-aos='fade-up' className='policy-item'>Single classes are to be paid prior to the start of the class.</li>
        <li data-aos='fade-up' className='policy-item'>Single classes that are not paid at the start of the class will be canceled and are subject to a $30 fee for rescheduling the next class.</li>
        <li data-aos='fade-up' className='policy-item'>Cancellations Within 24 Hours Of The Class Will Be Subject To A $30 Fee</li>
        <li data-aos='fade-up' className='policy-item'>All Document Duplicates Are Subject To A $25.00 Fee</li>
        <li data-aos='fade-up' className='policy-item'>All Driving Appointments Are 2 Hours</li>
      </ul>
    </div>
)
}

export default Policies