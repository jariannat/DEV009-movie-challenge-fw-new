import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import MovieItem from "../components/movieItem";

test("Renderiza el componente MovielItem con los datos proporcionados", () => {
  const title = "Ejemplo de película";
  const year = "2023";
  const imageUrl = "ruta/a/la/imagen.png";

  render(<MovieItem title={title} year={year} imageUrl={imageUrl} />);

  // Comprueba si el título y el año se renderizan correctamente
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(year)).toBeInTheDocument();

  // Comprueba si el elemento con la clase "post" existe
  expect(screen.getByText(title).closest('.post')).toBeInTheDocument();
});
