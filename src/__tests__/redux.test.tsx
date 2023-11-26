import type { PropsWithChildren, ReactNode } from 'react';
import { render, renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

import { store } from '../store';
import { useGetAllProductsQuery } from '../features/apiSlice';
import SearchPage from '@/pages/products/[page]';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

function WrapperComponent({ children }: PropsWithChildren): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

describe('useGetAllProductsQuery', () => {
  const product = 'iphone';
  const numbersPerPage = 10;
  const page = 1;
  const data = {};

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockIf(
      `https://dummyjson.com/products/search?q=${product}&limit=${numbersPerPage}&skip=0`,
      () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify({ data }),
        })
    );
  });

  it('a loading indicator is displayed while fetching data', async () => {
    const { result } = renderHook(
      () =>
        useGetAllProductsQuery({
          word: product,
          numbersPerPage: numbersPerPage,
          page: page,
        }),
      {
        wrapper,
      }
    );

    expect(result.current).toMatchObject({
      isLoading: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock).toHaveBeenCalledTimes(1);

    expect(result.current).toMatchObject({
      isLoading: false,
    });
  });

  it('the card component renders the relevant card data', async () => {
    const { getByText } = render(
      <WrapperComponent>
        <SearchPage />
      </WrapperComponent>
    );
    const { result } = renderHook(
      () =>
        useGetAllProductsQuery({
          word: product,
          numbersPerPage: numbersPerPage,
          page: page,
        }),
      {
        wrapper,
      }
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    await waitFor(() => {
      const cardElement = getByText('iPhone 9');
      expect(cardElement).toBeInTheDocument();
    });
  });
});
