import './Policies.css'
const Policies = () => {
  return (
    <div className='policies-container'>
      <h1 className='policies-heading'>Policies List</h1>
      <ul className="policies-list">
        <li className="policy-item">All Lessons Must Be Pre-Paid In Order To Keep Your Scheduled Appointment</li>
        <li>All Paid Lessons Must Be Completed Within 3 Months From The Date Of Purchase</li>
        <li>Cancellations Within 24 Hours Of The Class Will Be Subject To A $30 Fee</li>
        <li>All Driving Appointments Are 2 Hours</li>
        <li>All Duplicates Are Subject To A $25.00 Fee</li>
      </ul>
    </div>
)
}

export default Policies