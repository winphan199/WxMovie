interface IWatchListCardProps {
  id: number;
  url: string;
  title: string;
  date: string;
  genres: string;
  onRemoveWatchedMovie: (id: number) => Promise<void>;
}

function WatchListCard({ id, url, title, date, genres, onRemoveWatchedMovie }: IWatchListCardProps) {
  return (
    <div className="flex my-4 cursor-pointer hover:shadow-lg shadow-md rounded-md bg-white">
      <div className="w-28">
        <img src={`https://image.tmdb.org/t/p/original${url}`} alt={title} className="w-full h-full rounded-md" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-medium capitalize">{title}</h3>
        <p className="text-sm font-medium text-slate-600">{date}</p>
        <p className="text-base italic">{genres}</p>
        <button
          className="p-2 self-start bg-red-400 text-white font-medium rounded-lg mt-2 hover:bg-red-600"
          onClick={() => {
            onRemoveWatchedMovie(id);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
}

export default WatchListCard;
