import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        word,
        numbersPerPage,
        page,
      }: {
        word: string;
        numbersPerPage: number;
        page: number;
      }) =>
        `products${
          word ? `/search?q=${word}&` : '?'
        }limit=${numbersPerPage}&skip=${(page - 1) * 10}`,
    }),
    getProduct: builder.query({
      query: (id: string | null) => `products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useLazyGetProductQuery,
} = productsApi;
