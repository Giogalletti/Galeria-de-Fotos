import React from 'react';
import ImageCard from './ImageCard';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
