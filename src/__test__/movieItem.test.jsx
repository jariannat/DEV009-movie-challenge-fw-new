import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import MovieItem from "../components/movieItem";

// Mockear el componente Link de react-router-dom
jest.mock("react-router-dom", () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

test("Renderiza el componente MovielItem con los datos proporcionados", () => {
  const title = "Ejemplo de película";
  const year = "2023";
  const imageUrl = "ruta/a/la/imagen.png";

  render(<MovieItem title={title} year={year} imageUrl={imageUrl} />);

  // Verificar que el título, año e imagen se rendericen correctamente
  const titleElement = screen.getByText(title);
  const yearElement = screen.getByText(year);
  const imageElement = screen.getByAltText("Póster de película");

  expect(titleElement).toBeInTheDocument();
  expect(yearElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});


test("El enlace redirige a /detail", () => {
  render(<MovieItem title="Título" year="2023" imageUrl="imagen.jpg" />);

  // Verificar que el enlace redirija a /detail
  const linkElement = screen.getByRole("link");
  expect(linkElement).toHaveAttribute("href", "/detail");
});