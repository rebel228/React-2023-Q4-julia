import { Product } from '../../types';
import Loader from '../Loader';
import Card from '../Card';
import styles from './index.module.css';
import ErrorInfo from '../ErrorBoundary/ErrorInfo';
import ShowErrorInfo from '../ErrorBoundary/ShowErrorInfo';
import { useAppSelector } from '../../hooks/redux';

export default function SearchResults() {
  const results = useAppSelector((state) => state.search.results);
  const loading = useAppSelector((state) => state.search.loading);
  const error = useAppSelector((state) => state.search.error);

  return (
    <div className="bottom">
      {loading ? (
        <Loader />
      ) : (
        <>
          {results && results.length > 0 ? (
            <div className={styles.cards_container}>
              {results.map((product: Product, index: number) => (
                <Card key={index} product={product} />
              ))}
            </div>
          ) : (
            <p>No results</p>
          )}
          {error && <ErrorInfo />}
        </>
      )}
      <ShowErrorInfo />
    </div>
  );
}
