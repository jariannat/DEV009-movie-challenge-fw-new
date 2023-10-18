import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import MovieListLoading from '../components/loadingHome';

test('prueba de que se está mostrando el componente loading', () => {
    render(<MovieListLoading/>);
   
    const homeLoading = screen.getByTestId('loading-home');
    expect(homeLoading).toBeInTheDocument();
  
  });