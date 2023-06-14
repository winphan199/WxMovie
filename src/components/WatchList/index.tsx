import { useContext, useEffect } from 'react';
import classNames from 'classnames';

import Loader from '../Loader';
import WatchListCard from '../WatchListCard';
import { IWatchedMovie } from '~/hooks/useFetchWatchedList';
import { ToggleSideBarContext } from '~/contexts/ToggleSideBarContext';
import { Close } from '../Icons';

interface IWatchedListProps {
  watchedList: IWatchedMovie[] | null;
  onRemoveWatchedMovie: (id: number) => Promise<void>;
  isLoading: boolean;
}

function WatchList({ watchedList, onRemoveWatchedMovie, isLoading }: IWatchedListProps) {
  const { visibleSideBar, toggleSideBar } = useContext(ToggleSideBarContext);
  useEffect(() => {
    console.log(visibleSideBar);
  }, [visibleSideBar]);

  return (
    <aside
      className={classNames(
        'fixed top-0 -right-full w-full bottom-0 z-20 bg-stone-100 p-6 transition-all md:w-96 md:absolute md:z-10 lg:static lg:z-0',
        {
          '!right-0': visibleSideBar,
        },
      )}
    >
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-medium">Watched list</h2>
        <button onClick={toggleSideBar} className="visible lg:invisible cursor-pointer">
          <Close width="36px" height="36px" />
        </button>
      </div>
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
        <div className="flex justify-center my-8">
          <Loader />
        </div>
      )}
    </aside>
  );
}

export default WatchList;
