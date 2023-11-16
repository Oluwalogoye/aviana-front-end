import React from 'react';
import './Frame.scss'

const images = [
  'https://avianamolecular.com/wp-content/uploads/2016/06/pediatrican.ccrop_.jpg',
  'https://avianamolecular.com/wp-content/uploads/2016/05/AdobeStock_70706824_cropped-1-4.png',
  
];

const WebpageComponent = () => {
  return (
    <div className="frame-container">
      {images.map((url, index) => (
        <img key={index} src={url} className='img' alt="" />
      ))}
    </div>
    
  );
}

export default WebpageComponent;
