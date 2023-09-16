import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export interface IResult {
  adult?: string;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_count: number;
}

export interface ICard {
  result: IResult;
  id: string;
  key: number;
}

const Card = (props: ICard) => {
  return (
    <div
      key={props.id}
      className="pb-4 cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
    >
      <Link href={`/movie/${props.result?.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            props.result?.backdrop_path ?? props.result?.poster_path
          }`}
          width={500}
          height={300}
          alt="No Image"
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
      </Link>
      <div className="pt-2">
        <p className="text-sm font-bold pt-1 truncate">
          {props?.result?.title ?? ""}
        </p>
        <p className="text-xs flex items-center pt-0.5">
          {props.result?.release_date}
          <FiThumbsUp className="ml-3 mr-1" /> {props.result?.vote_count}
        </p>
        <p className="line-clamp-2 text-xs pt-1">{props.result?.overview}</p>
      </div>
    </div>
  );
};

export default Card;
