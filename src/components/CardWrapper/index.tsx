import Card from '../Card';

import { IMovie } from '~/hooks/useFetchMovies';
import { IGenre } from '~/hooks/useFetchGenre';

interface ICardWrapperProps {
  movieList: IMovie[] | null;
  genres: IGenre[] | null;
  onAddToWatchedList: (movie: IMovie) => Promise<void>;
}

function CardWrapper({ movieList, genres, onAddToWatchedList }: ICardWrapperProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-between">
      {movieList &&
        movieList.map((movie) => {
          if (!genres) {
            return (
              <Card
                key={movie.id}
                title={movie.title}
                date={movie.release_date}
                url={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                genres="Unknown genres"
                onAddToWatchedList={() => onAddToWatchedList(movie)}
              />
            );
          }
          const targetGenres = movie.genre_ids;
          const filteredGenres = genres
            .filter((genre) => targetGenres.includes(genre.id))
            .map((genre) => genre.name)
            .join(', ');

          return (
            <Card
              key={movie.id}
              title={movie.title}
              date={movie.release_date}
              url={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              genres={filteredGenres}
              onAddToWatchedList={() => onAddToWatchedList(movie)}
            />
          );
        })}
    </div>
  );
}

export default CardWrapper;
