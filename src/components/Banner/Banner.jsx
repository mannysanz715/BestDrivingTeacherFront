import './Banner.css'
function Banner(){
  const title = "Grace's Driving School"
  return (
    <header>
      <div className='banner-info'>
        <h2 className="banner-title">Driving Lessons in Los Angeles</h2>
        <h3 className="banner-description">Learn to drive with patient instructors. We will get you confident on the road.</h3>
      </div>
        <h1 className='titleText'>{title}</h1>
        <img src='/assets/logo.png' className='logo-banner' />
      <div className='banner-buttons'>
        <a href='tel: +1(213)841-1290' className='call-button button'> Call to Schedule a Class</a>
        <a   href="#pricing"  className='rates-button button'>Check our Rates</a>
      </div>
    </header>
)
}

export default Banner