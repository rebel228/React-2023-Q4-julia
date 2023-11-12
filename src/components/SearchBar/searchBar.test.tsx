import '@testing-library/jest-dom';
import SearchBar from '.';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    },
    writable: true,
  });
});

test('search button saves the entered value to the local storage', async () => {
  const { getByRole } = render(
    <Router>
      <SearchBar />
    </Router>
  );
  const searchButton = getByRole('search-button');
  fireEvent.click(searchButton);
  expect(window.localStorage.setItem).toHaveBeenCalled();
});
