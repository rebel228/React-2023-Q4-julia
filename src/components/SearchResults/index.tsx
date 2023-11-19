import { IProduct } from '../../types';
import Loader from '../Loader';
import Card from '../Card';
import styles from './index.module.css';
import ErrorInfo from '../ErrorBoundary/ErrorInfo';
import ShowErrorInfo from '../ErrorBoundary/ShowErrorInfo';
import { useAppSelector } from '../../hooks/redux';
import { useGetAllProductsQuery } from '../../features/apiSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useActions } from '../../hooks/actions';

export default function SearchResults() {
  const loadingProducts = useAppSelector(
    (state) => state.search.loadingProducts
  );
  const searchedWord = useAppSelector((state) => state.search.searchedWord);
  const numbersPerPage = useAppSelector((state) => state.search.numbersPerPage);
  const { setTotalProducts, setLoadingProducts } = useActions();
  const { page: pageFromURL } = useParams();
  const {
    data: dataProducts,
    isLoading,
    isFetching,
    isError,
  } = useGetAllProductsQuery({
    word: searchedWord,
    numbersPerPage: numbersPerPage,
    page: pageFromURL ? +pageFromURL : 0,
  });

  useEffect(() => {
    if (dataProducts) {
      setTotalProducts(dataProducts.total);
    }
  }, [dataProducts]);

  useEffect(() => {
    if (!isLoading && !isFetching) {
      setLoadingProducts(false);
    } else {
      setLoadingProducts(true);
    }
  }, [isLoading, isFetching]);

  return (
    <div className="bottom">
      {isError ? (
        <ErrorInfo />
      ) : (
        <>
          {loadingProducts ? (
            <Loader />
          ) : (
            <>
              {dataProducts &&
              dataProducts.products &&
              dataProducts.products.length > 0 ? (
                <div className={styles.cards_container}>
                  {dataProducts.products.map(
                    (product: IProduct, index: number) => (
                      <Card key={index} product={product} />
                    )
                  )}
                </div>
              ) : (
                <p>No results</p>
              )}
            </>
          )}
        </>
      )}

      <ShowErrorInfo />
    </div>
  );
}
