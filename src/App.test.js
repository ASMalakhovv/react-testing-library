import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const helloWorldElem = screen.getByText(/hello world/i);
  const btnElem = screen.getByRole('button');
  const inputElem = screen.getByPlaceholderText(/inner text/i);
  expect(helloWorldElem).toBeInTheDocument();
  expect(btnElem).toBeInTheDocument();
  expect(inputElem).toBeInTheDocument();
  screen.debug()
  expect(inputElem).toMatchSnapshot()
});
