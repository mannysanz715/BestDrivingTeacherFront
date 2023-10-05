/* eslint-disable react/no-unknown-property */
import './ActionBanner.css'

function ActionBanner() {
  return (
    <div className='action-banner-container'>
      <h1 className="action-banner-title">Call Now to Schedule an Appointment</h1>
      <a className='action-banner-button' href="tel: +1 (213) 841-1290">
        +1 (213) 814 - 1290
      </a>
      <h1 className="action-banner-title">Location:</h1>
      <a href='https://maps.app.goo.gl/LYTBsovExZPexkPL8' target='_blank' className='address-link' rel="noreferrer">
        <p className='action-banner-button'>925 N La Brea 4th Floor, Suite 429</p>
      </a>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.281300015654!2d-118.34721742355485!3d34.087933515843716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29116d75c752fe7d%3A0x9bd4234f1d64c98d!2sGrace&#39;s%20Driving%20School!5e0!3m2!1sen!2sus!4v1696529335583!5m2!1sen!2sus" width="350" height="350"  loading="lazy"></iframe>

    </div>

)
}

export default ActionBanner