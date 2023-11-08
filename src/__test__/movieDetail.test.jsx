import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import reactRouterDom from 'react-router-dom';
import { OnlyMovie } from "../views/onlyMovie";
import { getMovieDetail } from '../services/services';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn(),
  useParams: jest.fn()
}));

const mockData = {
  poster_path: '/backdrop.jpg',
  title: 'Sample Movie',
  overview: 'A great movie',
  vote_count: 100,
  release_date: '2022-01-01',
  vote_average: 8.5,
  genres: [{ id: 1, name: 'Action' }],
};
// Mock para la función getMovieDetail
// Mock de la función getMovie
jest.mock('../services/services');

describe('MovieDetail component', () => {

  beforeEach(() => {
    getMovieDetail.mockResolvedValue({ mockData });
  });

  it('se carga el componente movieDetail', () => {
    jest.spyOn(reactRouterDom, "useParams" ).mockReturnValue({ id: '123' })
    jest.spyOn(reactRouterDom, "Link" ).mockImplementation(({children}) => <a>{children}</a>)
    render(<OnlyMovie />);
  });



  /*  await waitFor(() => {
     console.log('Rendered MovieDetail component');
     expect(getMovieDetail).toHaveBeenCalledWith('123');
     console.log('getMovieDetail called with id: 123');
      // Verifica que los elementos se muestren correctamente
   expect(screen.getByText('Sample Movie')).toBeInTheDocument();
   expect(screen.getByText('A great movie')).toBeInTheDocument();
   expect(screen.getByText('Votos: 100')).toBeInTheDocument();
   expect(screen.getByText('Sinopsis: A great movie')).toBeInTheDocument();
   expect(screen.getByText('Géneros: Action')).toBeInTheDocument();
   });
   */

});

