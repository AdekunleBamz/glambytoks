import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import styled from 'styled-components';
import HomePage from './pages/HomePage';  // Adjusted import
import BookingPage from './pages/BookingPage'; // Adjusted import
import ServicesPage from './pages/ServicesPage'; // Adjusted import
import Portfolio from './components/Portfolio'; // Adjusted import
import Navigation from './components/Navigation'; // Adjusted import
import About from './components/About'; // Adjusted import for About

// Define theme...
const theme = createTheme({
  // Theme configuration...
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
                <Route path="/about" element={<About />} /> {/* Corrected path */}
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
