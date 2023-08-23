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
        <li data-aos='fade-up' className='policy-item'>Single classes that are not paid at the start of the class will be canceled. If the class is rescheduled, a $25 cancelation fee will be added for the cancelation of the first class.</li>
        <li data-aos='fade-up' className='policy-item'>All Lessons Must Be Pre-Paid In Order To Keep Your Scheduled Appointment</li>
        <li data-aos='fade-up' className='policy-item'>All Paid Lessons Must Be Completed Within 3 Months From The Date Of Purchase</li>
        <li data-aos='fade-up' className='policy-item'>Cancellations Within 24 Hours Of The Class Will Be Subject To A $30 Fee</li>
        <li data-aos='fade-up' className='policy-item'>All Document Duplicates Are Subject To A $25.00 Fee</li>
        <li data-aos='fade-up' className='policy-item'>All Driving Appointments Are 2 Hours</li>
      </ul>
    </div>
)
}

export default Policies