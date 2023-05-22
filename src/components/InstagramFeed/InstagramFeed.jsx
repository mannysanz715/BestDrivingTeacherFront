import PhotoCard from '../PhotoCard/PhotoCard'
import './InstagramFeed.css'

const photos = [
  {
    classList : 'animate__animated animate__fadeIn insta-photo',
    src : '/assets/photo1.png'},
  { 
    classList : 'animate__animated animate__fadeIn insta-photo',
    src : '/assets/photo3.png'
  },
]

function InstagramFeed () {
  return (
    <section className='instagram-feed-container'>
      <PhotoCard photos={photos}/>
      <a className='insta-action' href='https://www.instagram.com/best_driving_teacher/' alt='instagram' target='_blank' rel="noreferrer">
        <img className='insta-logo' src="/assets/insta-logo.png" />      
        <h4 className='insta-action'>Follow us on Instagram</h4>
      </a>
    </section>
)
}

export default InstagramFeed