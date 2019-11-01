import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import PlayerCard from './components/PlayerCard';

test('renders without crashing', () => {
  render(<App />);
});

test('it displays the title', () => {
  const { getByText } = render(<App />);
  getByText(/women's world cup soccer/i)
})

test('it displays the toggle', () => {
  const { getByTestId } = render(<App />);
  getByTestId('toggle')
})

test('it displays the cards', () => {
  const { getByTestId } = render(<App />);
  getByTestId('cards')
})