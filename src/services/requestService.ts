import axios from 'axios';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzcxZDcyZGEyZmIwMzNhOWNmNWMyNWVlYzE4NDgwNCIsInN1YiI6IjY0ODc5YTViZTI3MjYwMDBlOGMyMTAxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yj8QaDJGDatERGuGd6vkFRDGhXhg59Oj8gEYiN4SQG4';

const movieRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
});

const imgRequest = axios.create({
  baseURL: 'https://image.tmdb.org/t/p/original',
});

export { movieRequest, imgRequest };
