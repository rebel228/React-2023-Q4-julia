import { useState } from 'react';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';

export default function Search() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<Error | boolean>();

  const search = (word: string) => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people?page=1${word ? `&search=${word}` : ''}`)
      .then((res) => res.json())
      .then((fetchedData) => {
        setResults(fetchedData.results);
        setError(false);
        setLoading(false);
        localStorage.setItem('search', word);
      })
      .catch((error: Error) => {
        setLoading(false);
        setError(error);
        throw new Error(JSON.stringify(error));
      });
  };

  return (
    <div className="container">
      <SearchBar search={search} />
      <SearchResults results={results} loading={loading} error={error} />
    </div>
  );
}
