import {
  screen,
  render,
  waitFor,
  renderHook,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';
import { IProduct } from '../types';
import { PropsWithChildren, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useGetAllProductsQuery } from '../features/apiSlice';
import SearchPage from '@/pages/products/[page]';
import Details from '../components/Details';
import { useSearchParams } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

function WrapperComponent({ children }: PropsWithChildren): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

const product = 'iphone';
const numbersPerPage = 10;
const page = 1;
const data = {};
const productData: IProduct = {
  title: 'iPhone 9',
  id: 2,
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
  ],
};

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

test('should render card component', () => {
  render(<Card product={productData} />);
  const cardElement = screen.getByText('iPhone 9');
  expect(cardElement).toBeInTheDocument();
});

test('clicking on a card opens a detailed card component', async () => {
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

  render(
    <WrapperComponent>
      <SearchPage />
    </WrapperComponent>
  );
  waitFor(() => {
    const cardElement = screen.getAllByRole('card')[0];
    expect(cardElement).toBeInTheDocument();
    fireEvent.click(cardElement);
  });
  waitFor(() => {
    const detailedCard = screen.getByRole('detailed-card');
    expect(detailedCard).toBeInTheDocument();
  });
});

test('close button to be in the detailed card', async () => {
  const mockGet = jest.fn();
  mockGet.mockReturnValue('5000');

  (useSearchParams as jest.Mock).mockReturnValue({
    toString: () => toString,
    get: mockGet,
  });

  const { getByText } = render(
    <WrapperComponent>
      <Details />
    </WrapperComponent>
  );

  await waitFor(() => {
    const closeBtn = getByText('close');
    expect(closeBtn).toBeInTheDocument();
  });
});
