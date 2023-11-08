import axios from 'axios';

import MockAdapter from 'axios-mock-adapter';
import { getMovie } from './tuArchivoConFuncion';

const mock = new MockAdapter(axios);

describe('getMovie', () => {
  it('debe realizar una solicitud GET a la API de películas', async () => {
    const page = 1;
    const responseData = { results: [/* datos de películas simulados */] };

    mock.onGet(`https://api.themoviedb.org/3/discover/movie?page=${page}`).reply(200, responseData);

    const result = await getMovie(page);

    expect(result.status).toBe(200);
    expect(result.data).toEqual(responseData);
  });
});

