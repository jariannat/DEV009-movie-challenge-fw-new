import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../app';

test('debería renderizar la página de inicio por defecto', () => {
    render(
        <App />
    );
    // Verifica que el componente de HomePage se represente
    const homePageElement = screen.getByText('Movie-do');
    expect(homePageElement).toBeInTheDocument();
  });