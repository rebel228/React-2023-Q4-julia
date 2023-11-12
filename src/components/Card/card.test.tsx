import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';
import { Product } from '../../types';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

test('should render card component', () => {
  const product: Product = {
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

  render(<Card product={product} />);
  const cardElement = screen.getByText('iPhone 9');
  expect(cardElement).toBeInTheDocument();
});
