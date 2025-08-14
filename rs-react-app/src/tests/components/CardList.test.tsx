import { render, screen } from '@testing-library/react';
import CardList from '../../components/search/CardList';
import { DetailsProvider } from '../../context/details/DetailsContext';
import { Provider } from 'react-redux';
import { configureStore, type Store } from '@reduxjs/toolkit';
import itemsReducer from '../../store/itemsSlice';

describe('CardList', () => {
  let store: Store;

  beforeEach(() => {
    store = configureStore({
      reducer: { items: itemsReducer },
    });
  });
  it('should render list of cards if the array is not empty', () => {
    const list = [
      {
        name: 'spearow',
        url: 'https://pokeapi.co/api/v2/pokemon/21/',
      },
      {
        name: 'fearow',
        url: 'https://pokeapi.co/api/v2/pokemon/22/',
      },
    ];

    render(
      <Provider store={store}>
        <DetailsProvider>
          <CardList data={list} />
        </DetailsProvider>
      </Provider>
    );

    list.forEach((card) => {
      const link = screen.getByText(`${card.name}:`);
      expect(link).toBeInTheDocument();
    });
  });
});
