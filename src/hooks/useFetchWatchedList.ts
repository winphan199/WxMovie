import { useState, useEffect, useMemo } from 'react';

import { supabase } from '~/services/supabaseClient';

export interface IWatchedMovie {
  id: number;
  url: string;
  genres: string;
  title: string;
  date: string;
}

function useFetchWatchedList() {
  const [watchedList, setWatchedList] = useState<IWatchedMovie[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchWatchedMovies = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from('watched_list').select('*').limit(15);
      const convertedData = data as IWatchedMovie[];
      setWatchedList(convertedData);
      if (error) {
        throw error;
      }
      setIsLoading(false);
      setError(null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchWatchedMovies();
  }, []);

  const handlePostNewWatchedMovie = async (watchedMovie: IWatchedMovie) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.from('watched_list').insert(watchedMovie);

      if (error) {
        throw error;
      } else {
        setWatchedList((prev) => {
          if (prev) {
            return [...prev, watchedMovie];
          } else {
            return prev;
          }
        });
      }
      setIsLoading(false);
      setError(null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteWatchedMovie = async (id: number) => {
    try {
      const { error } = await supabase.from('watched_list').delete().eq('id', id);

      if (error) {
        throw error;
      } else {
        handleFetchWatchedMovies();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    watchedList,
    isLoading,
    error,
    handleFetchWatchedMovies,
    handlePostNewWatchedMovie,
    handleDeleteWatchedMovie,
  };
}

export default useFetchWatchedList;
