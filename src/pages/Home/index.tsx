import { useEffect, useState } from 'react';
import CardWrapper from '~/components/CardWrapper';
import FilterBar from '~/components/FilterBar';
import WatchList from '~/components/WatchList';

import useFetchMovies from '~/hooks/useFetchMovies';
import useFetchGenre from '~/hooks/useFetchGenre';
import { IGenre } from '~/hooks/useFetchGenre';

function Home() {
  const { genres: genresList } = useFetchGenre();
  const [year, setYear] = useState(2023);
  const [genre, setGenre] = useState<number>(0);
  const { movies, isLoading } = useFetchMovies({ year: year, genre: genre });

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="bg-green-300 min-h-screen mt-20 flex">
      <div className="px-10 flex-1">
        <FilterBar year={year} onYearChange={setYear} genre={genre} onGenreChange={setGenre} genres={genresList} />
        <CardWrapper movieList={movies} genres={genresList} />
      </div>
      <WatchList />
    </div>
  );
}

export default Home;
