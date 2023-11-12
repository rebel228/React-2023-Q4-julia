import RoutingApp from './services/routing';
import { SearchContext } from './Contexts/searchContext';
import { useState } from 'react';
import { Product } from './types';

function App({
  results,
  setResults,
}: {
  results: Product[];
  setResults: (results: Product[]) => void;
}) {
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [numbersPerPage, setNumbersPerPage] = useState<number>(10);

  return (
    <div>
      <SearchContext.Provider
        value={{
          results,
          setResults,
          loading,
          setLoading,
          error,
          setError,
          totalProducts,
          setTotalProducts,
          numbersPerPage,
          setNumbersPerPage,
        }}
      >
        <RoutingApp />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
