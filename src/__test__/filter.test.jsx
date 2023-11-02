import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Filter from '../components/filter';
import '@testing-library/jest-dom';

describe('Filter Component', () => {
  it('deberia renderizar con los datos proporcionados', () => {
    const dataFilter = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
    ];

    render(<Filter selected="Select an option" dataFilter={dataFilter} handleClickFilter={jest.fn()} />);

    const button = screen.getByText('Select an option');
    expect(button).toBeInTheDocument();

    
    const dropdown = screen.queryByRole('listbox');
    expect(dropdown).not.toBeInTheDocument();
    fireEvent.click(button);

    
    const visibleDropdown = screen.getByRole('listbox');
    expect(visibleDropdown).toBeInTheDocument();

    // verifica que las opciones esten renderizads
    dataFilter.forEach((item) => {
      const option = screen.getByText(item.name);
      expect(option).toBeInTheDocument();
    });
  });

  it('debería llamar a handleClickFilter cuando se selecciona una opción', async () => {
    const dataFilter = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
    ];

    const handleClickFilterMock = jest.fn();

    render(<Filter selected="Select an option" dataFilter={dataFilter} handleClickFilter={handleClickFilterMock} />);

    
    const button = screen.getByText('Select an option');
    fireEvent.click(button);

   
    const option = screen.getByText('Option 1');
    fireEvent.click(option);

    
    await waitFor(() => {
      expect(handleClickFilterMock).toHaveBeenCalledWith(dataFilter[0]);
    });
  });
});
