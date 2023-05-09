import PhotoCard from '../PhotoCard/PhotoCard'
import './InstagramFeed.css'

const photos = [
  '/assets/photo1.png',
  '/assets/photo2.png',
  '/assets/photo3.png',
  '/assets/photo4.png',
  '/assets/photo5.png',
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