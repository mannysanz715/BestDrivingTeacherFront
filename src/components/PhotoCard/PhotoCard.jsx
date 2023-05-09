/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './PhotoCard.css'
function PhotoCard (props) {
  const [animate, setAnimate] = useState(false)
  const [number, setNumber] = useState(0);
  useEffect(() => {
      // create interval
      const interval = setInterval(
        // set number every 5s
        () => {
          setAnimate(!animate)
          setNumber(Math.floor(Math.random() * 5))
        }, 5000);
        
        
      // clean up interval on unmount
      return () => {
        clearInterval(interval);
      };
    }, []);
  return (
    <div className="photo-container">
      <img className='insta-photo animate__animated animate__duration-5 animate__infinite animate__fadeIn' src={props.photos[number]}/>
    </div>
)
}

export default PhotoCard