import WatchListCard from '../WatchListCard';

function WatchList() {
  return (
    <aside className="w-96 bg-stone-100 p-6">
      <h2 className="text-2xl font-medium mb-8">Watched list</h2>
      <div>
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
      </div>
    </aside>
  );
}

export default WatchList;
