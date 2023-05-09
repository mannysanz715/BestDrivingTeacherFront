/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './PhotoCard.css'
function PhotoCard (props) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
      // create interval
      const interval = setInterval(
        // set number every 5s
        () => setNumber(Math.floor(Math.random() * 5)),
        5000
      );

      // clean up interval on unmount
      return () => {
        clearInterval(interval);
      };
    }, []);
  return (
    <div className="photo-container">
      <img className='insta-photo'src={props.photos[number]}/>
    </div>
)
}

export default PhotoCard