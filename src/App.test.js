import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByAltText, getByText } = await render(<App />);          
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
