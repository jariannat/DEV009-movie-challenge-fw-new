import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

import MovieList from "../components/movieList";

const testData = [
  {
    id: 1,
    title: "Película 1",
    release_date: "2023-01-01",
    poster_path: "/poster1.jpg",
  },
  {
    id: 2,
    title: "Película 2",
    release_date: "2023-02-02",
    poster_path: "/poster2.jpg",
  },
];

test("Renderiza el componente MovieList con los datos proporcionados", () => {
  const page = 3;
  const cantPage = 4;
  const handleClickPage = jest.fn();

  render(<MovieList data={testData} page={page} cantPage={cantPage} handleClickPage={handleClickPage} />);

  // Comprueba que los elementos se rendericen correctamente
  const movieElements = screen.getAllByRole("article");
  expect(movieElements).toHaveLength(testData.length);

  // Busca los botones de paginación por sus atributos o elementos SVG
  const previousButton = screen.getByTestId("previous-button");
  const nextButton = screen.getByTestId("next-button");

  // Simula hacer clic en los botones de paginación
  fireEvent.click(previousButton);
  fireEvent.click(nextButton);

  // Comprueba que la función handleClickPage se llamó con los valores correctos
  expect(handleClickPage).toHaveBeenCalledTimes(2);
  expect(handleClickPage).toHaveBeenCalledWith(page - 1);
  expect(handleClickPage).toHaveBeenCalledWith(page + 1);
});

test('no debería poder cambiar de página', () => {

  const handleClickPage = jest.fn();
  render(<MovieList data={testData} page={1} cantPage={1} handleClickPage={handleClickPage} />);

  const previousButton = screen.getByTestId("previous-button");
  const nextButton = screen.getByTestId("next-button");

  // Simula intentar cambiar de página
  fireEvent.click(previousButton);
  fireEvent.click(nextButton);

  expect(handleClickPage).toHaveBeenCalledTimes(0); // No debería cambiar de página
  expect(handleClickPage).not.toHaveBeenCalledWith(1);
});
