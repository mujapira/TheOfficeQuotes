import { render, screen } from '@testing-library/react';
import { App } from './App';

test('render the app with a button, a quote and a image', () => {
  render(<App />);

 const buttonEl = screen.getByRole('button');
 const imageEl = screen.getByRole('img');
 const textEl = screen.getByText(/speaker/);

 expect(buttonEl).toBeInTheDocument();
 expect(imageEl).toBeInTheDocument();
 expect(textEl).toBeInTheDocument();
});