import CardItemDetails from '../card/CardItemDetails';
import { Button } from '../button/Button';
import { Loading } from '../helpers/LoadingElement';
import { ErrorElement } from '../helpers/ErrorElement';
import CardList from './CardList';
import { useGetItemByNameQuery, useGetItemsQuery } from '../../services/api';
import { useEffect, useState } from 'react';
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

  const [isSingleItem, setIsSingleItem] = useState(Boolean(searchTerm));

  const {
    data: listData,
    isLoading: listIsLoading,
    error: listError,
    refetch: refetchList,
  } = useGetItemsQuery(state.currentPage);

  const {
    data: itemData,
    isLoading: itemIsLoading,
    error: itemError,
    refetch: refetchItem,
  } = useGetItemByNameQuery(searchTerm, { skip: !isSingleItem });

  useEffect(() => {
    setIsSingleItem(Boolean(searchTerm && searchTerm.trim()));
    if (listData) {
      setLinks(listData.previous || null, listData.next || null);
      setCount(listData.count || 0);
    }
  }, [listData, searchTerm]);

  const loading = listIsLoading || itemIsLoading;
  const errorMessage = listError || itemError;
  const data = itemData ? [itemData] : listData?.results;

  function handleRefresh() {
    if (searchTerm) {
      refetchItem();
    } else {
      refetchList();
    }
  }

  return (
    <div className="min-h-90 grid md:grid-cols-2  gap-4  ">
      <section>
        <div className="mt-4">
          <Button onClick={handleRefresh}>Refresh 🔃</Button>
        </div>
        <h2 className="dark:text-white">Results</h2>
        <div className="wrapper">
          {loading && <Loading />}
          {errorMessage && <ErrorElement error={errorMessage} />}
          {data && !loading && <CardList data={data} />}
        </div>

        {listData?.results.length && !itemData && (
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
