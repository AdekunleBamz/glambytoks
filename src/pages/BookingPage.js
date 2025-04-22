import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  Paper,
} from '@mui/material';
import { WhatsApp, Email, ArrowForward } from '@mui/icons-material';

const BookingSection = styled(Box)`
  padding: 6rem 0;
  background-color: ${props => props.theme.palette.background.default};
`;

const BookingOption = styled(Paper)`
  padding: 2rem;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled(Box)`
  margin-bottom: 1.5rem;
  color: ${props => props.theme.palette.secondary.main};
  
  .MuiSvgIcon-root {
    font-size: 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    location: '',
    message: '',
  });

  const whatsappNumber = '+2347010171606';
  const whatsappMessage = encodeURIComponent('Hi, I would like to book a makeup session with GLAMBYTOKS');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const bookingEmail = 'oritoke087@gmail.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailBody = `
      New Booking Request:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Date: ${formData.date}
      Service: ${formData.service}
      Location: ${formData.location}
      Message: ${formData.message}
    `;
    
    const mailtoLink = `mailto:${bookingEmail}?subject=New Booking Request&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <BookingSection>
      <Container>
        <Typography 
          variant="h2" 
          component="h1" 
          align="center" 
          gutterBottom
          sx={{ mb: 6 }}
        >
          Book Your Glam Session
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <BookingOption elevation={3}>
              <IconWrapper>
                <WhatsApp />
              </IconWrapper>
              <Typography variant="h5" gutterBottom>
                Book via WhatsApp
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Chat with us directly on WhatsApp for quick booking and inquiries.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowForward />}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </Button>
            </BookingOption>
          </Grid>

          <Grid item xs={12} md={6}>
            <BookingOption elevation={3}>
              <IconWrapper>
                <Email />
              </IconWrapper>
              <Typography variant="h5" gutterBottom>
                Book via Email
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Fill out our booking form and we'll get back to you shortly.
              </Typography>
              <Form onSubmit={handleSubmit}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  required
                  fullWidth
                  label="Service Type"
                  name="service"
                  select
                  value={formData.service}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="studio">Studio Glam (₦15,000)</option>
                  <option value="home">Home Service (₦30,000 - ₦50,000)</option>
                  <option value="birthday">Birthday Shoot (₦20,000)</option>
                  <option value="white-wedding">White Wedding (₦60,000)</option>
                  <option value="court-wedding">Court Wedding (₦40,000)</option>
                  <option value="engagement">Engagement/Introduction (₦40,000 - ₦50,000)</option>
                </TextField>
                <TextField
                  required
                  fullWidth
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your address (for home service) or 'Studio'"
                />
                <TextField
                  fullWidth
                  label="Additional Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requests or additional information"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForward />}
                >
                  Submit Booking
                </Button>
              </Form>
            </BookingOption>
          </Grid>
        </Grid>
      </Container>
    </BookingSection>
  );
};

export default BookingPage; 