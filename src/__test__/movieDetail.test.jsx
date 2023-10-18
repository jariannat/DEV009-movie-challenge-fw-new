import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import MovieDetail from '../views/movieDetail'

test('show Movie detail correctly', () => {
    render(<MovieDetail/>);
   
    const homeLoading = screen.getByTestId('movie-detail-view');
    expect(homeLoading).toBeInTheDocument();
  
  });