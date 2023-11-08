import React from 'react';
import {render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { getMovie } from '../services/services';
import HomePage from '../views/home'

// Mock de la función getMovie
jest.mock('../services/services');
// Mockear el componente Link de react-router-dom
jest.mock("react-router-dom", () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));


const testData = {
  results: [
    {
      id: 1,
      title: 'Película 1',
      release_date: '2023-01-01',
      poster_path: '/poster1.jpg',
    },
    {
      id: 2,
      title: 'Película 2',
      release_date: '2023-02-02',
      poster_path: '/poster2.jpg',
    },
  ],
  total_pages: 3,
};


describe('HomePage Component', () => {

  beforeEach(() => {
    // Restablecer el mock de getMovie antes de cada prueba
    getMovie.mockResolvedValue({ data: testData });
  });

  it('renders loading state and then displays movie list',() => {
    render(<HomePage/>);
    
    // Esperar a que se cargue la lista de películas
    const movieListElement = screen.getByTestId('home-view');
    expect(movieListElement).toBeInTheDocument();
  });

 it('show movie list  correctly', async () => {
    render(<HomePage />);
    //espera que cargue la lista 
    await screen.findByTestId('movie-list');
    const movieElements = screen.getAllByRole('article');
    expect(movieElements).toHaveLength(testData.results.length);
  }); 

 it('handles page change correctly', async () => {
  render(<HomePage />);

  await screen.findByTestId('movie-list');

  const nextButton = screen.getByTestId('next-button');
  const genre ={"id": "", "name": "Géneros"};
  const sort= {"id": "popularity.desc", "name": "Ordenar por"}
  act(() => {
    fireEvent.click(nextButton);
    expect(getMovie).toHaveBeenCalledWith(1, genre, sort);
  });


  act(() => {
    fireEvent.click(nextButton);
    expect(getMovie).toHaveBeenCalledWith(2, genre, sort);
  });

});
});