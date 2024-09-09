import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.src.medium} alt={image.alt_description || "Imagem"} />
      <p>{image.description || "Sem descrição"}</p>
      <p>Fotógrafo: {image.photographer}</p>
    </div>
  );
};

export default ImageCard;
