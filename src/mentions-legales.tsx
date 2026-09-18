import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MentionsLegales from './components/MentionsLegales.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MentionsLegales />
  </StrictMode>
);
