import { render, waitFor } from '@testing-library/react';
import { AppContext } from '../context/app/AppContext';
import App from '../App';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { COUNT_PER_PAGE } from '../context/app/constants';
import { ThemeProvider } from '../context/theme/ThemeContext';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const setSearchParams = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom'
    );
  return {
    ...actual,
    useSearchParams: () => [new URLSearchParams(''), setSearchParams],
  };
});

vi.mock('./components/search/Results', () => ({
  Results: () => <div>Mocked Results</div>,
}));

describe('App', () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true, element: <App /> }],
    },
  ];
  const router = createMemoryRouter(routes);

  function renderComponent() {
    return render(
      <ThemeProvider>
        <Provider store={store}>
          <AppContext.Provider
            value={{
              state: { currentPage: 1, countPerPage: COUNT_PER_PAGE, count: 0 },
              handleNextClick: vi.fn(),
              handlePrevClick: vi.fn(),
              setPage: vi.fn(),
              setLinks: vi.fn(),
              setCount: vi.fn(),
              setSearchTerm: vi.fn(),
              searchTerm: '',
            }}
          >
            <RouterProvider router={router} />
          </AppContext.Provider>
        </Provider>
      </ThemeProvider>
    );
  }

  it('should set initial searchParams', async () => {
    renderComponent();

    await waitFor(() =>
      expect(setSearchParams).toHaveBeenCalledWith({ page: '1' })
    );
  });
});
