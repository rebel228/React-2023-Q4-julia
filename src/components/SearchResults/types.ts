import { Person } from '../../types';

export type SearchResultsPropsType = {
  results?: Person[];
  loading?: boolean;
  error?: Error | boolean;
  page?: number;
};
