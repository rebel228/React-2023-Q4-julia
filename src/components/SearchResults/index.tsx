import { Product } from '../../types';
import Loader from '../Loader';
import Card from '../Card';
import styles from './index.module.css';
import ErrorInfo from '../ErrorBoundary/ErrorInfo';
import ShowErrorInfo from '../ErrorBoundary/ShowErrorInfo';
import { useSearchContext } from '../../Contexts/searchContext';

export default function SearchResults() {
  const { loading, results, error } = useSearchContext();

  return (
    <div className="bottom">
      {loading ? (
        <Loader />
      ) : (
        <>
          {results && (
            <div className={styles.cards_container}>
              {results.map((product: Product, index: number) => (
                <Card key={index} product={product} />
              ))}
            </div>
          )}
          {error && <ErrorInfo />}
        </>
      )}
      <ShowErrorInfo />
    </div>
  );
}
