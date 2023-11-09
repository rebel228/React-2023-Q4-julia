import RoutingApp from './services/routing';

import { SearchContext } from './Contexts/searchContext';
import { useState } from 'react';
import { Product } from './types';

function App() {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<Error | boolean>();

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
          // totalProducts,
          // setTotalProducts
        }}
      >
        <RoutingApp />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
