import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {countObj} from "./render";


test('renders learn react link', () => {
  render(<App countObj={countObj}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
