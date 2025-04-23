import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioImages = [
    { id: 1, src: '', title: 'Bridal Makeup', category: 'Bridal' },
    { id: 2, src: '', title: 'Evening Glam', category: 'Evening' },
    { id: 3, src: '', title: 'Natural Look', category: 'Natural' },
    { id: 4, src: '', title: 'Editorial Makeup', category: 'Editorial' },
    { id: 5, src: '', title: 'Special Occasion', category: 'Special' },
    { id: 6, src: '', title: 'Bridal Party', category: 'Bridal' },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Discover the artistry and creativity behind GlamByToks</p>
      </div>
      
      <div className="portfolio-grid">
        {portfolioImages.map((image) => (
          <div 
            key={image.id} 
            className="portfolio-item"
            onClick={() => handleImageClick(image)}
          >
            <div className="image-container">
              <div className="placeholder-image">
                <span className="image-title">{image.title}</span>
              </div>
            </div>
            <div className="image-info">
              <h3>{image.title}</h3>
              <span className="category">{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <div className="modal-image-container">
              <div className="placeholder-image large">
                <span className="image-title">{selectedImage.title}</span>
              </div>
            </div>
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>Category: {selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio; 