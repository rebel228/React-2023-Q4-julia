import { Person } from '../../types';
import Loader from '../Loader';
import Card from '../Card';
import styles from './index.module.css';
import ErrorInfo from '../ErrorBoundary/ErrorInfo';
import ShowErrorInfo from '../ErrorBoundary/ShowErrorInfo';
import { SearchResultsPropsType } from './types';

export default function SearchResults(props: SearchResultsPropsType) {
  return (
    <div className="bottom">
      {props.loading ? (
        <Loader />
      ) : (
        <>
          {props.results && (
            <div className={styles.cards_container}>
              {props.results.map((person: Person, index: number) => (
                <Card key={index} person={person} />
              ))}
            </div>
          )}
          {props.error && <ErrorInfo />}
        </>
      )}
      <ShowErrorInfo />
    </div>
  );
}
