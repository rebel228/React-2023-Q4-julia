import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { store } from '../store';

function Wrapper({ children }: PropsWithChildren): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

test('if no cards are present', async () => {
  const { getByText } = render(
    <Wrapper>
      <Router>
        <App />
      </Router>
    </Wrapper>
  );
  await waitFor(() => {
    const noElements = getByText('No results');
    expect(noElements).toBeInTheDocument();
  });
});
