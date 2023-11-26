import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvalidRoute from '@/pages/404';

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

test('should render 404', () => {
  render(<InvalidRoute />);

  expect(screen.getByText(/404 not found!/i)).toBeInTheDocument();
});
