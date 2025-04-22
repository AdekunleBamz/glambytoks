import React, { useState } from 'react';
import { Typography, CircularProgress, Box, Container } from '@mui/material';
import styled from 'styled-components';
import config from '../config';

const PortfolioContainer = styled(Container)`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: #f8f8f8;
`;

const PortfolioHeader = styled(Box)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const PortfolioGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const PortfolioItem = styled(Box)`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  aspect-ratio: 1;
  background: white;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const PortfolioImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
  
  ${PortfolioItem}:hover & {
    transform: scale(1.1);
  }
`;

const SocialLinks = styled(Box)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  
  a {
    color: #333;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    background: #f8f8f8;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    
    &:hover {
      color: #ff69b4;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
  }
`;

const Portfolio = () => {
  const [loadingImages, setLoadingImages] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [imageErrors, setImageErrors] = useState([]);

  const portfolioImages = [
    { 
      id: 1, 
      src: '/images/portfolio/portfolio1.jpg', 
      alt: 'Bridal Makeup Look' 
    },
    { 
      id: 2, 
      src: '/images/portfolio/portfolio2.jpg', 
      alt: 'Evening Glam Look' 
    },
    { 
      id: 3, 
      src: '/images/portfolio/portfolio3.jpg', 
      alt: 'Natural Makeup Look' 
    },
    { 
      id: 4, 
      src: '/images/portfolio/portfolio4.jpg', 
      alt: 'Special Occasion Makeup' 
    },
    { 
      id: 5, 
      src: '/images/portfolio/portfolio5.jpg', 
      alt: 'Editorial Makeup Look' 
    },
  ];

  const socialMediaLinks = {
    instagram: `https://instagram.com/${config.social.instagram}`,
    tiktok: `https://tiktok.com/@${config.social.tiktok}`,
    facebook: `https://facebook.com/${config.social.facebook}`
  };

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
    if (loadedImages + 1 === portfolioImages.length) {
      setLoadingImages(false);
    }
  };

  const handleImageError = (imageId) => {
    setImageErrors(prev => [...prev, imageId]);
    setLoadedImages(prev => prev + 1);
    if (loadedImages + 1 === portfolioImages.length) {
      setLoadingImages(false);
    }
  };

  return (
    <PortfolioContainer maxWidth="lg">
      <PortfolioHeader>
        <Typography 
          variant="h2" 
          component="h1"
          sx={{ 
            color: '#333',
            fontWeight: 800,
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          Our Portfolio
        </Typography>
        <Typography 
          variant="h6" 
          component="p"
          sx={{ 
            color: '#666',
            mb: 4,
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Discover our signature makeup looks and transformations
        </Typography>
        <SocialLinks>
          <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={socialMediaLinks.tiktok} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </SocialLinks>
      </PortfolioHeader>
      
      {loadingImages && (
        <Box sx={{ textAlign: 'center', margin: '2rem 0' }}>
          <CircularProgress />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Loading portfolio images...
          </Typography>
        </Box>
      )}
      
      {imageErrors.length > 0 && (
        <Box sx={{ textAlign: 'center', margin: '1rem 0', color: 'error.main' }}>
          <Typography variant="body2">
            Some images failed to load. Please check the image files.
          </Typography>
        </Box>
      )}
      
      <PortfolioGrid>
        {portfolioImages.map((image) => (
          <PortfolioItem key={image.id}>
            <PortfolioImage 
              src={image.src} 
              alt={image.alt}
              onLoad={handleImageLoad}
              onError={() => handleImageError(image.id)}
            />
          </PortfolioItem>
        ))}
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default Portfolio; 