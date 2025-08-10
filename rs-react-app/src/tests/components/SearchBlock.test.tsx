// Rendering Tests:
// Displays previously saved search term from localStorage on mount
// Shows empty input when no saved term exists

// User Interaction Tests:
// Updates input value when user types
// Saves search term to localStorage when search button is clicked
// Trims whitespace from search input before saving
// Triggers search callback with correct parameters

// LocalStorage Integration:
// Retrieves saved search term on component mount
// Overwrites existing localStorage value when new search is performed

import { render, screen } from '@testing-library/react';
import { TopControls } from '../../components/search/SearchBlock';
import { Provider } from 'react-redux';
import itemsReducer from '../../store/itemsSlice';
import { configureStore, type Store } from '@reduxjs/toolkit';
import { AppProvider } from '../../context/app/AppContext';

describe('TopControls Component', () => {
  let store: Store;
  const renderComponent = () => {
    render(
      <Provider store={store}>
        <AppProvider>
          <TopControls />
        </AppProvider>
      </Provider>
    );
  };

  beforeEach(() => {
    store = configureStore({
      reducer: { items: itemsReducer },
    });
  });
  it('should renders search input and button', () => {
    renderComponent();

    expect(screen.getByPlaceholderText(/enter/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  // it('should displays previously saved search term from localStorage on mount', () => {
  //   renderComponent();
  //   //
  // });
});
