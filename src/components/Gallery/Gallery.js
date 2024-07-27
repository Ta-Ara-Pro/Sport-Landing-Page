import React, { useState } from 'react';
import gallery_data from './gallery_data';
import log from '../../assets/log.png'
import './Gallery.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery_data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + gallery_data.length) % gallery_data.length
    );
  };

  const { aks, header } = gallery_data[currentIndex];

  return (
    <div className='topic'>
      {/* <img src={log}/>  */}
      <div className='headerg'>
        <h1>Gallery</h1>
      </div>



      <div className='gallery' style={{ backgroundImage: `url(${aks})` }}>
        <div className='slider'>
          <div className='slide'>
            <img src={aks} alt='Gallery slide' className='ph' />
            <div className='description'>{header}</div>
          </div>
          <button className='prev' onClick={prevSlide}>‹</button>
          <button className='next' onClick={nextSlide}>›</button>
        </div>
      </div>
    </div>
   
  );
};

export default Gallery;
