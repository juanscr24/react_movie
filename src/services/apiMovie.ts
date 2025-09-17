import axios from 'axios'

export const apiMovies = axios.create(
    {
        baseURL: 'https://www.omdbapi.com/'
    }
);

