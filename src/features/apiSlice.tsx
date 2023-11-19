import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductsQuery, IProducts } from '../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProducts, IProductsQuery>({
      query: ({ word, numbersPerPage, page }) =>
        `products${
          word ? `/search?q=${word}&` : '?'
        }limit=${numbersPerPage}&skip=${(page - 1) * 10}`,
    }),
    getProduct: builder.query<IProduct, string | null>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetProductQuery,
} = productsApi;
