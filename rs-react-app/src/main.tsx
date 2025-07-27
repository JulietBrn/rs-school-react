import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './error/errorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFoundElement } from './pages/NotFoundElement';
import { About } from './pages/About';
import { Layout } from './components/layout/Layout';
import { BugCreator } from './error/BugCreator';

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
      <RouterProvider router={router} />
      <BugCreator />
    </ErrorBoundary>
  </StrictMode>
);
