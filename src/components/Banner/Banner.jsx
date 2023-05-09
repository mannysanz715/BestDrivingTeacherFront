import './Banner.css'
function Banner(){
  return (
    <header>
      <h2 className="banner-title">Driving Lessons in Los Angeles</h2>
      <h3 className="banner-description">Learn to drive with patient instructors. We will get you confident on the road.</h3>
      <img src='/assets/logo.png' className='logo-banner' />
      <a href='tel: +1(213)841-1290' className='call-button button'> Call to Schedule a Class</a>
      <a   href="#pricing"  className='rates-button button'>Check our Rates</a>
    </header>
)
}

export default Banner