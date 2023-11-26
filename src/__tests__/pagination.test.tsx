import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { store } from '../store';
import Pagination from '../components/Pagination';

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

test('pagination', async () => {
  const { getByText } = render(
    <Wrapper>
      <Pagination />
    </Wrapper>
  );

  await waitFor(() => {
    const next = getByText('Next');
    expect(next).toBeInTheDocument();
  });
});
