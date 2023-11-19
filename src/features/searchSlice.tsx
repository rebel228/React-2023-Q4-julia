import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types';

interface ISearchState {
  results: Product[];
  loading?: boolean;
  error?: string;
  totalProducts: number;
  numbersPerPage: number;
  searchedWord: string;
}

const initialState: ISearchState = {
  results: [],
  loading: false,
  error: '',
  totalProducts: 0,
  numbersPerPage: 10,
  searchedWord: localStorage.getItem('search') ?? '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<Product[]>) => {
      state.results = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setTotalProducts: (state, action: PayloadAction<number>) => {
      state.totalProducts = action.payload;
    },
    setNumbersPerPage: (state, action: PayloadAction<number>) => {
      state.numbersPerPage = action.payload;
    },
    setSearchedWord: (state, action: PayloadAction<string>) => {
      state.searchedWord = action.payload;
      localStorage.setItem('search', action.payload);
    },
  },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
