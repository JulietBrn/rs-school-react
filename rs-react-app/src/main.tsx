import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ErrorBoundary from './error/errorBoundary.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFoundElement } from './pages/NotFoundElement.tsx';
import { About } from './pages/About.tsx';
import { Layout } from './parts/Layout.tsx';
import { BugCreator } from './error/BugCreator.tsx';

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
