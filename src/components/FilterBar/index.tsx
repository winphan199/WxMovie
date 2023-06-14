import { IGenre } from '~/hooks/useFetchGenre';

interface IFilterBar {
  onYearChange: React.Dispatch<React.SetStateAction<number>>;
  year: number;
  genre: number;
  onGenreChange: React.Dispatch<React.SetStateAction<number>>;
  genres: IGenre[] | null;
}

function FilterBar({ year, onYearChange, genres, genre, onGenreChange }: IFilterBar) {
  return (
    <div className="flex p-6 bg-white rounded-xl mt-4">
      <div className="mr-6 flex items-center">
        <label className="text-lg font-medium mr-2" htmlFor="year">
          Year
        </label>
        <input
          className="border-2 border-solid border-[#ddd] px-3 py-2 outline-none rounded-md w-full"
          type="number"
          min="1900"
          max="2023"
          step="1"
          id="year"
          name="year"
          value={year}
          onChange={(e) => onYearChange(+e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="genres" className="text-lg font-medium mr-2">
          Genres
        </label>
        <select
          id="genres"
          name="genres"
          className="border-2 border-solid border-[#ddd] px-3 py-2 outline-none rounded-md w-full"
          value={genre}
          onChange={(e) => {
            if (genres) {
              const selectedGenre = e.target.value;

              onGenreChange(+selectedGenre);
            }
          }}
        >
          {genres &&
            genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
