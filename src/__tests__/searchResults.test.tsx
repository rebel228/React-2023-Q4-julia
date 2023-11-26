import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { store } from '../store';
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

function Wrapper({ children }: PropsWithChildren): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

test('if no cards are present', async () => {
  const { getByText } = render(
    <Wrapper>
      <SearchPage />
    </Wrapper>
  );
  await waitFor(() => {
    const noElements = getByText('No results');
    expect(noElements).toBeInTheDocument();
  });
});
