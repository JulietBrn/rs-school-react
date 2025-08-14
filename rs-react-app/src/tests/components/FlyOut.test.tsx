import { Provider } from 'react-redux';
import { render, screen, act, waitFor } from '@testing-library/react';
import FlyOut from '../../components/flyout/FlyOut';
import { toggleSelect, unselectAll } from '../../store/itemsSlice';
import { configureStore, type Store } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';
import itemsReducer from '../../store/itemsSlice';
import type { Card } from '../../types/card';
import { downloadCSV } from '../../utils/downloadCSV';

describe('FlyOut', () => {
  let store: Store;
  const testCard1 = { name: 'Test Item', url: 'Test url' };
  const testCard2 = { name: 'Test Item 2', url: 'Test url 2' };

  const renderComponent = () => {
    render(
      <Provider store={store}>
        <FlyOut />
      </Provider>
    );
  };

  beforeEach(() => {
    store = configureStore({
      reducer: { items: itemsReducer },
    });
  });

  it('should be rendered when there are selected items', () => {
    const { container } = render(
      <Provider store={store}>
        <FlyOut />
      </Provider>
    );

    act(() => {
      store.dispatch(toggleSelect(testCard1));
    });

    const flyoutElement = container.querySelector('#flyout');
    expect(flyoutElement).toHaveClass('opacity-100', 'visible');
  });

  it('should render correct items number', async () => {
    renderComponent();

    act(() => {
      store.dispatch(toggleSelect(testCard1));
    });

    await waitFor(() => {
      expect(screen.getByText(/1 items/i)).toBeInTheDocument();
    });
  });

  it('should remove item from store after the second click on it', async () => {
    renderComponent();

    act(() => {
      store.dispatch(toggleSelect(testCard1));
      store.dispatch(toggleSelect(testCard2));
      store.dispatch(toggleSelect(testCard1));
    });

    await waitFor(() => {
      const state = store.getState();
      const items = state.items.selectedItems;

      expect(
        items.some((card: Card) => card.name === testCard1.name)
      ).toBeFalsy();
      expect(
        items.some((card: Card) => card.name === testCard2.name)
      ).toBeTruthy();
    });
  });

  it('should not have selected items after dispatching unselectAll', async () => {
    renderComponent();

    act(() => {
      store.dispatch(toggleSelect(testCard1));
      store.dispatch(unselectAll());
    });

    await waitFor(() => {
      expect(screen.getByText(/0 items/i)).toBeInTheDocument();
    });
  });

  it('should call downloadCSV function when Dounload button has been clicked', async () => {
    vi.mock('../../utils/downloadCSV', () => ({
      downloadCSV: vi.fn(),
    }));

    renderComponent();

    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: /download/i });
    await user.click(button);

    expect(downloadCSV).toHaveBeenCalled();
  });
});
