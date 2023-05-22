/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './PhotoCard.css'
function PhotoCard (props) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
      // create interval
      const interval = setInterval(
        // set number every 5s
        () => {
          document.querySelector('.insta-photo').classList.remove('animate__fadeIn')
          setNumber(Math.floor(Math.random() * 2))
        }, 5001);
        
      // clean up interval on unmount
      return () => {
        clearInterval(interval);
      };
    }, []);
  return (
    <div className="photo-container">
      <img className={props.photos[number].classList} src={props.photos[number].src}/>
    </div>
)
}

export default PhotoCard