import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import App from '../../App';
import { NotFoundElement } from '../../pages/NotFoundElement';
import { Layout } from '../../components/layout/Layout';
import { About } from '../../pages/About';

describe('NotFoundElement', () => {
  it('should be rendered if entered unknown path', () => {
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
    const router = createMemoryRouter(routes, { initialEntries: ['/uknown'] });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/not exist/i)).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /home/i });
    expect(link).toHaveAttribute('href', '/');
  });
});
