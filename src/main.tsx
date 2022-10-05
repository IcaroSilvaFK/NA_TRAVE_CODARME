/**
 * @author @IcaroSilvaFK
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { globalCSS } from './styles/global';
import { Routes } from './routes';

globalCSS();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  </StrictMode>,
);
