import '@testing-library/jest-dom';
import SearchBar from '../components/SearchBar';
import { fireEvent, render } from '@testing-library/react';
import { testids } from '../constants/testids';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

const testInputValue = 'test';
const mockLocalStorage: Record<string, string> = {};

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

function Wrapper({ children }: PropsWithChildren): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn((key, value) => (mockLocalStorage[key] = value)),
    },
    writable: true,
  });
});

test('search button saves the entered value to the local storage', async () => {
  const { getByRole, getByTestId } = render(
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
  const searchInput = getByTestId(testids.searchInput) as HTMLInputElement;
  fireEvent.change(searchInput, { target: { value: testInputValue } });
  const searchButton = getByRole('search-button');
  fireEvent.click(searchButton);

  expect(window.localStorage.setItem).toHaveBeenCalled();
  expect(searchInput.value).toBe(mockLocalStorage['search']);
});

test('component retrieves the value from the local storage upon mounting', async () => {
  window.localStorage.getItem = () => testInputValue;
  const { getByTestId } = render(
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
  const searchInput = getByTestId(testids.searchInput) as HTMLInputElement;

  expect(searchInput.value).toBe(testInputValue);
});
