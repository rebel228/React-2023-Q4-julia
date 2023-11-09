import { Product } from '../types';

export type SearchResultsContextType = {
  results: Product[];
  loading?: boolean;
  error?: Error | boolean;
  //   totalProducts: number;
  //   setTotalProducts: (totalProducts: number) => void;
  setResults: (results: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error | boolean) => void;
};
