import CardItemDetails from '../card/CardItemDetails';
import { Button } from '../button/Button';
import { Loading } from '../helpers/LoadingElement';
import { ErrorElement } from '../helpers/ErrorElement';
import CardList from './CardList';
import { useGetItemsQuery } from '../../services/api';
import { useEffect } from 'react';
import { useAppContext } from '../../context/app/useAppContext';
import { useDetailsContext } from '../../context/details/useDetailsContext';

function Results() {
  const { isDetailsShown } = useDetailsContext();
  const {
    state,
    searchTerm,
    setLinks,
    setCount,
    handleNextClick,
    handlePrevClick,
  } = useAppContext();

  const {
    data: listData,
    isLoading: listIsLoading,
    error: listError,
  } = useGetItemsQuery(state.currentPage, { skip: !!searchTerm });

  // const {
  //   data: itemData,
  //   isLoading: itemIsLoading,
  //   error: itemError,
  // } = useGetItemByNameQuery(state.inputValue, { skip: !searchTerm });

  useEffect(() => {
    if (listData) {
      setLinks(listData.previous || null, listData.next || null);
      setCount(listData.count || 0);
    }
  }, [listData]);

  // const loading = listIsLoading || itemIsLoading;
  // const errorMessage = listError || itemError;
  // const data = itemData ? [itemData] : listData?.results;

  return (
    <div className="min-h-90 grid md:grid-cols-2  gap-4  ">
      <section>
        <h2 className="dark:text-white">Results</h2>
        <div className="wrapper">
          {listIsLoading && <Loading />}
          {listError && <ErrorElement error={listError} />}
          {listData?.results && <CardList data={listData.results} />}
        </div>

        {listData?.results.length && (
          <div className="buttons-wrap">
            <Button onClick={handlePrevClick}>Prev</Button>
            <Button onClick={handleNextClick}>Next</Button>
          </div>
        )}
      </section>
      {isDetailsShown && <CardItemDetails />}
    </div>
  );
}

export { Results };
