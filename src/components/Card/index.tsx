import { IconAddLater } from '../Icons';

interface ICardProps {
  title: string;
  date: string;
  genres: string;
  url: string;
  onAddToWatchedList: any;
}

function Card({ title, date, genres, url, onAddToWatchedList }: ICardProps) {
  return (
    <div className="m-6 shadow-md hover:shadow-xl rounded-lg cursor-pointer bg-white">
      <div className="rounded-t-lg">
        <img src={url} alt="title" className="w-full h-full rounded-t-lg" />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium capitalize line-clamp-1">{title}</h3>
          <button onClick={onAddToWatchedList}>
            <IconAddLater height="20px" width="20px" className="hover:text-green-300 text-white transition-colors" />
          </button>
        </div>
        <p className="text-sm font-medium text-slate-600 line-clamp-1">{date}</p>
        <p className="text-base italic line-clamp-1">{genres}</p>
      </div>
    </div>
  );
}

export default Card;
