import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

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

test('it displays the countries', async () => {
  const { getAllByText } = render(<App />);
  await waitForElement (() => getAllByText(/country/i));
})

test('it displays the search count', async () => {
  const { getAllByText } = render(<App />);
  await waitForElement (() => getAllByText(/search count/i));
})