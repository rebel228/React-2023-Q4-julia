import { createContext, useContext } from 'react';
import { SearchResultsContextType } from './types';

export const SearchContext = createContext<SearchResultsContextType>({
  results: [],
  setResults: () => {},
  loading: false,
  setLoading: () => {},
  error: '',
  setError: () => {},
  totalProducts: 0,
  setTotalProducts: () => {},
  numbersPerPage: 10,
  setNumbersPerPage: () => {},
});

export const useSearchContext = () => useContext(SearchContext);
