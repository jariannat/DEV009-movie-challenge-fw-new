import "@testing-library/jest-dom"; 
import { render, screen } from "@testing-library/react";
import MovieItem from "../components/movieItem"
import { BrowserRouter as Router } from "react-router-dom";

test("El enlace debe redirigir a /detail/id", () => {
  const movie = {
    id: 123, // Reemplaza 123 con el ID de la película que desees
    title: "Ejemplo de película",
    year: 2023,
    imageUrl: "imagen.jpg",
  };

  render(
    <Router>
      <MovieItem {...movie} />
    </Router>
  );
  const linkElement = screen.getByRole("link");

  // Utiliza toHaveAttribute de la librería @testing-library/jest-dom
  expect(linkElement).toHaveAttribute("href", `/detail/${movie.id}`);
});
