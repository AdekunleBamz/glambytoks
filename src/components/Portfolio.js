import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioImages = [
    { id: 1, src: '/images/portfolio/portfolio1.jpg', title: 'Bridal Makeup', category: 'Bridal' },
    { id: 2, src: '/images/portfolio/portfolio2.jpg', title: 'Evening Glam', category: 'Evening' },
    { id: 3, src: '/images/portfolio/portfolio3.jpg', title: 'Natural Look', category: 'Natural' },
    { id: 4, src: '/images/portfolio/portfolio4.jpg', title: 'Editorial Makeup', category: 'Editorial' },
    { id: 5, src: '/images/portfolio/portfolio5.jpg', title: 'Special Occasion', category: 'Special' },
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
              <img 
                src={image.src} 
                alt={image.title}
                className="portfolio-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '';
                  e.target.parentElement.classList.add('placeholder-image');
                }}
              />
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
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="modal-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '';
                  e.target.parentElement.classList.add('placeholder-image');
                }}
              />
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