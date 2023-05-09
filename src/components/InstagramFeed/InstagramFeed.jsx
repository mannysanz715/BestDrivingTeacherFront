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
    </section>
)
}

export default InstagramFeed