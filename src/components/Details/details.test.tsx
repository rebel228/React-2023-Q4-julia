import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../Details';

test('clicking close button hides the component', () => {
  const { getByText, getByRole } = render(
    <Router>
      <Details />
    </Router>
  );
  const buttonClose = getByText('close');
  const detailedCard = getByRole('detailed-card');
  fireEvent.click(buttonClose);
  expect(detailedCard).not.toBeInTheDocument();
});
