import { Product } from '../../types';

export type SearchResultsPropsType = {
  results?: Product[];
  loading?: boolean;
  error?: Error | boolean;
  page?: number;
};
