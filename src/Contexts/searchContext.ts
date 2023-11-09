import { createContext, useContext } from 'react';
import { SearchResultsContextType } from './types';

export const SearchContext = createContext<SearchResultsContextType>({
  results: [],
  setResults: () => {},
  loading: false,
  setLoading: () => {},
  //   error: false,
  setError: () => {},
});

export const useSearchContext = () => useContext(SearchContext);
