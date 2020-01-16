import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('balls is on the display', () => {
  const { getByText } = render(<App />);
  
  expect(getByText(/balls/i)).toBeInTheDocument();
});

test('strikes is on the display', () => {
  const { getByText } = render(<App />);
  
  getByText(/strikes/i);
});

test('strike button adds up to 2 and resets to zero after next click', () => {
  const app = render(<App />);

  const strikeBtn = app.getByTestId('strike-btn');
  const strikes = app.getByTestId('strikes');

  fireEvent.click(strikeBtn);
  expect(strikes.textContent).toBe('1');
  fireEvent.click(strikeBtn);
  expect(strikes.textContent).toBe('2');
  fireEvent.click(strikeBtn);
  expect(strikes.textContent).toBe('0');
});

test('ball button adds up to 3 and resets to zero after next click', () => {
  const app = render(<App />);

  const ballBtn = app.getByTestId('ball-btn');
  const balls = app.getByTestId('balls');

  fireEvent.click(ballBtn);
  expect(balls.textContent).toBe('1');
  fireEvent.click(ballBtn);
  expect(balls.textContent).toBe('2');
  fireEvent.click(ballBtn);
  expect(balls.textContent).toBe('3');
  fireEvent.click(ballBtn);
  expect(balls.textContent).toBe('0');
});

test('foul button can only add strikes up to two', () => {
  const app = render(<App />);

  const foulBtn = app.getByTestId('foul-btn');
  const strikes = app.getByTestId('strikes');

  fireEvent.click(foulBtn);
  expect(strikes.textContent).toBe('1');
  fireEvent.click(foulBtn);
  expect(strikes.textContent).toBe('2');
  fireEvent.click(foulBtn);
  expect(strikes.textContent).toBe('2');

});

test('hit button resets strikes and balls', () => {
  const app = render(<App />);

  const hitBtn = app.getByTestId('hit-btn');
  const strikes = app.getByTestId('strikes');
  const balls = app.getByTestId('balls');

  fireEvent.click(hitBtn);
  expect(strikes.textContent).toBe('0')
  expect(balls.textContent).toBe('0')

})