import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from '../components/header';

test('prueba de que se está mostrando el header', () => {
  render(<Header />);
  const linkElement = screen.getByText('Movie-do');
  expect(linkElement).toBeInTheDocument();
  
  const logoElement = screen.getByTestId('logo');
  expect(logoElement).toBeInTheDocument();

  // Verifica que el componente tenga la clase 'header'
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toHaveClass('header');
});