import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ErrorBoundary from './error/errorBoundary.tsx';
import { BugCreator } from './error/BugCreator.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
      <BugCreator />
    </ErrorBoundary>
  </StrictMode>
);
