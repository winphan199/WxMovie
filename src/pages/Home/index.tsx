import { useEffect, useState } from 'react';
import CardWrapper from '~/components/CardWrapper';
import FilterBar from '~/components/FilterBar';
import WatchList from '~/components/WatchList';

import useFetchMovies from '~/hooks/useFetchMovies';
import useFetchGenre from '~/hooks/useFetchGenre';
import useFetchWatchedList, { IWatchedMovie } from '~/hooks/useFetchWatchedList';
import { IMovie } from '~/hooks/useFetchMovies';

function Home() {
  const { genres: genresList } = useFetchGenre();
  const [year, setYear] = useState(2023);
  const [genre, setGenre] = useState<number>(0);
  const { movies, isLoading } = useFetchMovies({ year: year, genre: genre });
  const {
    watchedList,
    isLoading: isLoadingWatchedList,
    handleFetchWatchedMovies,
    handlePostNewWatchedMovie,
    handleDeleteWatchedMovie,
  } = useFetchWatchedList();

  useEffect(() => {
    console.log(movies);
  }, [movies]);
  useEffect(() => {
    console.log(21, watchedList);
  }, [watchedList]);

  const handleAddToWatchedList = async (movie: IMovie) => {
    if (!genresList) {
      return;
    }
    const targetGenres = movie.genre_ids;
    const filteredGenres = genresList
      .filter((genre) => targetGenres.includes(genre.id))
      .map((genre) => genre.name)
      .join(', ');
    const watchedMovie: IWatchedMovie = {
      id: movie.id,
      title: movie.title,
      date: movie.release_date,
      genres: movie.genre_ids ? filteredGenres : 'Unknown genres',
      url: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
    };
    await handlePostNewWatchedMovie(watchedMovie);
    await handleFetchWatchedMovies();
  };

  return (
    <div className="bg-green-300 min-h-screen mt-20 flex">
      <div className="px-10 flex-1">
        <FilterBar year={year} onYearChange={setYear} genre={genre} onGenreChange={setGenre} genres={genresList} />

        {!isLoading ? (
          <CardWrapper movieList={movies} genres={genresList} onAddToWatchedList={handleAddToWatchedList} />
        ) : (
          <p>is loading</p>
        )}
      </div>
      <WatchList
        watchedList={watchedList}
        onRemoveWatchedMovie={handleDeleteWatchedMovie}
        isLoading={isLoadingWatchedList}
      />
    </div>
  );
}

export default Home;
