import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

test('should render card component', () => {
  const product = {
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
  };
  const index = 0;
  //   render(<Card key={index} product={product} />);
  //   const cardElement = screen.getByRole('div');
  //     expect(cardElement).toBeInTheDocument();
  render(<Card key={index} product={product} />);
  const cardElement = screen.getByText('iPhone 9');
  expect(cardElement).toBeInTheDocument();
});
