import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container } from './Page.styles';
import GlobalStyle from '../../config/GlobalStyle';
import { darkTheme } from '../../config/theme';
import Header from '../Header';
import Routes from '../../router/routes';
import LateralMenu from '../LateralMenu';

const Page: React.FC = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <BrowserRouter>
      <Container>
        <Header />
        <main>
          <Routes />
        </main>
        <LateralMenu />
      </Container>
    </BrowserRouter>
  </ThemeProvider>
);

export default Page;
