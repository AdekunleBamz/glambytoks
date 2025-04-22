import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ServicesPage from './pages/ServicesPage';
import Portfolio from './components/Portfolio';
import Navigation from './components/Navigation';
// Import other pages like AboutPage etc. later

// Theme inspired by vimcosmo.com
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a', // Dark theme color
      light: '#2c2c2c',
      dark: '#000000',
    },
    secondary: {
      main: '#D4AF37', // Gold accent
      light: '#E5C158',
      dark: '#B69329',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f8f8',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a',
    }
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '0.75rem 2rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
  },
});

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.palette.background.default};
`;

const Header = styled.header`
  background-color: ${props => props.theme.palette.background.default};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

const Footer = styled.footer`
  padding: 2rem;
  background-color: ${props => props.theme.palette.background.paper};
  text-align: center;
  margin-top: auto;
  border-top: 1px solid ${props => props.theme.palette.grey[200]};
`;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppContainer>
            <Header>
              <Navigation />
            </Header>
            <MainContent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                {/* Add other routes as needed */}
              </Routes>
            </MainContent>
            <Footer>
              <p>&copy; {new Date().getFullYear()} GLAMBYTOKS. All rights reserved.</p>
            </Footer>
          </AppContainer>
        </Router>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
