import { useState, useEffect } from 'react';
import axios from 'axios';

import { movieRequest } from '~/services/requestService';

interface IResponse {
  page: number;
  results: IResult[];
  total_pages: number;
  total_results: number;
}

interface IResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  title: string;
  release_date: string;
}

interface IUseFetchMoviesProps {
  year: number;
  genre: number;
}

function useFetchMovies({ year, genre }: IUseFetchMoviesProps) {
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchMovies = async (year: number, genre: number) => {
    try {
      setIsLoading(true);
      const response = await movieRequest.get<IResponse>('discover/movie', {
        params: {
          language: 'en-US',
          page: 1,
          with_genres: genre !== 0 && genre.toString(),
          primary_release_year: year,
        },
      });
      const movies = response.data?.results;
      let transformedMovies: IMovie[] = movies.map((movie) => {
        return {
          id: movie.id,
          backdrop_path: movie['backdrop_path'],
          poster_path: movie['poster_path'],
          genre_ids: movie['genre_ids'],
          title: movie.title,
          release_date: movie['release_date'],
        };
      });

      if (transformedMovies.length > 10) {
        transformedMovies = transformedMovies.slice(0, 10);
      }
      setIsLoading(false);
      setMovies(transformedMovies);
      setError(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.message);
        if (error.response) {
          console.error(error?.response.data.status_message);
          setError(error.response.data.status_message);
        }
      } else {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchMovies(year, genre);
  }, [year, genre]);

  return { movies, isLoading, error, handleFetchMovies };
}

export default useFetchMovies;
