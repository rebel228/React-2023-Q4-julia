import { Product } from '../types';

export type SearchResultsContextType = {
  results: Product[];
  loading?: boolean;
  error?: string;
  totalProducts: number;
  setTotalProducts: (totalProducts: number) => void;
  setResults: (results: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  numbersPerPage: number;
  setNumbersPerPage: (numbersPerPage: number) => void;
};
