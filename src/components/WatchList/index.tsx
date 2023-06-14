import WatchListCard from '../WatchListCard';
import { IWatchedMovie } from '~/hooks/useFetchWatchedList';

interface IWatchedListProps {
  watchedList: IWatchedMovie[] | null;
  onRemoveWatchedMovie: (id: number) => Promise<void>;
  isLoading: boolean;
}

function WatchList({ watchedList, onRemoveWatchedMovie, isLoading }: IWatchedListProps) {
  return (
    <aside className="w-96 bg-stone-100 p-6">
      <h2 className="text-2xl font-medium mb-8">Watched list</h2>
      {!isLoading ? (
        <div>
          {watchedList &&
            watchedList.map((item) => {
              return (
                <WatchListCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  url={item.url}
                  date={item.date}
                  genres={item.genres}
                  onRemoveWatchedMovie={onRemoveWatchedMovie}
                />
              );
            })}
        </div>
      ) : (
        <p>is loading</p>
      )}
    </aside>
  );
}

export default WatchList;
