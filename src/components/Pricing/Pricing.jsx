import './Pricing.css'

function Pricing () {
  return (
    <>
      <h2 className='pricing-header' id='pricing'>Driving Rates</h2>
    <a className='policies-link' href='/policies'>Before booking, please go over our policies here.</a>
        <div className="reg-class-pricing card">
          <h3 className='rate-title'>2 Hour Lessons</h3>
          <p className='rate-price'>Price: $150</p>
          <p className='rate-description'>This includes pick up and drop off within Los Angeles</p>
          <p className='rate-description'>Training during the entire lesson.</p>
        </div>
        <div className="drive-test-pricing card end">
          <h3 className='rate-title'>Behind the Wheel Test</h3>
          <p className='rate-price'>Price: $225</p>
          <p className='rate-description'>This includes pick up within Los Angeles 1 hour prior to DMV appointment time.</p>
          <p className='rate-description'>All registration and paper work taken care of.</p>
          <p className='rate-description'>Vehicle for the actual exam.</p>
          <p className='rate-description'>And drop off in Los Angeles</p>
          <p className='rate-description'><strong>This is a flat rate, whether student passes or fails</strong></p>
        </div>
    </>
)
}

export default Pricing