import { type Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useGetItemByNameQuery } from '../../services/api';
import { DetailsContext } from '../../context/details/DetailsContext';
import CardItemDetails from '../../components/card/CardItemDetails';

vi.mock('../../services/api', () => ({
  useGetItemByNameQuery: vi.fn(),
}));

const mockedPokemonData = {
  name: 'pikachu',
  url: 'https://pokeapi.co/api/v2/pokemon/25/',
  abilities: [
    {
      ability: {
        name: 'torrent',
        url: 'https://pokeapi.co/api/v2/ability/67/',
      },
    },
    {
      ability: {
        name: 'rain-dish',
        url: 'https://pokeapi.co/api/v2/ability/68/',
      },
    },
  ],
};

function renderWithContext(ui: React.ReactNode) {
  return render(
    <DetailsContext.Provider
      value={{
        currentName: 'pikachu',
        isDetailsShown: true,
        hideDetails: vi.fn(),
        showDetails: vi.fn(),
      }}
    >
      {ui}
    </DetailsContext.Provider>
  );
}
describe('LoadingElement', () => {
  it('should render loading indicator when loading is true', () => {
    (useGetItemByNameQuery as Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    renderWithContext(<CardItemDetails />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should not render loading indicator when loading is false', () => {
    (useGetItemByNameQuery as Mock).mockReturnValue({
      data: mockedPokemonData,
      error: null,
      isLoading: false,
    });

    renderWithContext(<CardItemDetails />);

    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
});
