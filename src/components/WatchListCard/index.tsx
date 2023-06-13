function WatchListCard() {
  return (
    <div className="flex my-4 cursor-pointer hover:shadow-lg shadow-md rounded-md bg-white">
      <div className="w-28">
        <img
          src="https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
          alt=""
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-medium capitalize">League of Legends</h3>
        <p className="text-sm font-medium text-slate-600">Dec 16, 2014</p>
        <p className="text-base italic">Drama, horror, comedy</p>
        <button className="p-2 self-start bg-red-400 text-white font-medium rounded-lg mt-2 hover:bg-red-600">
          remove
        </button>
      </div>
    </div>
  );
}

export default WatchListCard;
