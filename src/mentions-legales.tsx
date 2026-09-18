import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MentionsLegales from './components/MentionsLegales.tsx';
import { definirLangue } from './lib/i18n';
import './index.css';

definirLangue('fr');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MentionsLegales />
  </StrictMode>
);
