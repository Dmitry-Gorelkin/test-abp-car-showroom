import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme.ts';
import { GlobalStyle } from './style/GlobalStyle.ts';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
