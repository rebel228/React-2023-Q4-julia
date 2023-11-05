export type PaginationPropsType = {
  totalProducts?: number;
  setNumbersPerPage: React.Dispatch<React.SetStateAction<number>>;
  numbersPerPage: number;
};
