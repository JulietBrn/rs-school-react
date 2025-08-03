import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App';
import ErrorBoundary from './components/error/errorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFoundElement } from './pages/NotFoundElement';
import { About } from './pages/About';
import { Layout } from './components/layout/Layout';
import { BugCreator } from './components/error/BugCreator';
import { AppProvider } from './context/app/AppContext';
import { ThemeProvider } from './context/theme/ThemeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'about', element: <About /> },
    ],
  },
  { path: '*', element: <NotFoundElement /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <AppProvider>
          <RouterProvider router={router} />
          <BugCreator />
        </AppProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
