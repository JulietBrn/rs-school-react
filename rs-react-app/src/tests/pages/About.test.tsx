import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import { Layout } from '../../components/layout/Layout';
import { About } from '../../pages/About';
import { NotFoundElement } from '../../pages/NotFoundElement';
import { ThemeProvider } from '../../context/theme/ThemeContext';

describe('About', () => {
  it('should be rendered if entered about path', () => {
    const routes = [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <App /> },
          { path: 'about', element: <About /> },
        ],
      },
      { path: '*', element: <NotFoundElement /> },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/about'] });

    render(
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    );

    const heading = screen.getByRole('heading', { name: /about/i });
    expect(heading).toBeInTheDocument();
  });
});
