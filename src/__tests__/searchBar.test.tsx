import '@testing-library/jest-dom';
import SearchBar from '../components/SearchBar';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { testids } from '../constants/testids';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

const testInputValue = 'test';
const mockLocalStorage: Record<string, string> = {};

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
      <Router>
        <SearchBar />
      </Router>
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
      <Router>
        <SearchBar />
      </Router>
    </Wrapper>
  );
  const searchInput = getByTestId(testids.searchInput) as HTMLInputElement;

  expect(searchInput.value).toBe(testInputValue);
});
