import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { Product } from '../types';

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

test('clicking close button hides the component', async () => {
  const { getByText, getByRole } = render(
    <Router>
      <App results={[product]} setResults={() => null} />
    </Router>
  );

  await waitFor(() => {
    const card = getByRole('card');
    fireEvent.click(card);

    const buttonClose = getByText('close');
    const detailedCard = getByRole('detailed-card');
    fireEvent.click(buttonClose);
    expect(detailedCard).not.toBeInTheDocument();
  });
});
