import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISearchState {
  loadingProducts?: boolean;
  loadingProduct?: boolean;
  totalProducts: number;
  numbersPerPage: number;
  searchedWord: string | null;
}

const initialState: ISearchState = {
  loadingProducts: true,
  loadingProduct: true,
  totalProducts: 0,
  numbersPerPage: 10,
  searchedWord:
    typeof window !== "undefined" ? localStorage.getItem("search") : "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setLoadingProducts: (state, action: PayloadAction<boolean>) => {
      state.loadingProducts = action.payload;
    },
    setLoadingProduct: (state, action: PayloadAction<boolean>) => {
      state.loadingProduct = action.payload;
    },
    setTotalProducts: (state, action: PayloadAction<number>) => {
      state.totalProducts = action.payload;
    },
    setNumbersPerPage: (state, action: PayloadAction<number>) => {
      state.numbersPerPage = action.payload;
    },
    setSearchedWord: (state, action: PayloadAction<string>) => {
      state.searchedWord = action.payload;
      if (typeof window !== "undefined")
        localStorage.setItem("search", action.payload);
    },
  },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
