import { useState, useEffect } from 'react';
import axios from 'axios';

import { movieRequest } from '~/services/requestService';

export interface IGenre {
  id: number;
  name: string;
}

function useFetchGenre() {
  const [genres, setGenres] = useState<IGenre[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleFetchGenres();
  }, []);

  const handleFetchGenres = async () => {
    try {
      setIsLoading(true);
      const response = await movieRequest.get('genre/movie/list', {
        params: {
          language: 'en',
        },
      });
      setIsLoading(false);
      const genresList = response.data?.genres;
      genresList.unshift({ id: 0, name: 'Choose a genre' });
      setGenres(genresList);
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
  return { genres, isLoading, error, handleFetchGenres };
}

export default useFetchGenre;
