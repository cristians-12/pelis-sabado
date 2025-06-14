export const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
};