import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme.ts';
import { GlobalStyle } from './style/GlobalStyle.ts';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { BackToTop } from './components/UI/BackToTop/BackToTop.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toaster position="top-right" reverseOrder={false} />
        <BackToTop />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
