import Image from "next/image";

export interface IMovie {
  params: {
    id: string;
  };
  searchParams: any;
}

const getMovie = async (movieId: string) => {
  const url: string = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`;
  const res = await fetch(url);

  return res?.json();
};

const Movie = async (props: IMovie) => {
  const movieId = props?.params?.id;
  const {
    title,
    original_title,
    poster_path,
    backdrop_path,
    overview,
    release_date,
    vote_average,
  } = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="pt-4 flex flex-col md:pt-8 md:flex-row md:space-x-6 items-center content-center max-w-6xl mx-auto">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path ?? poster_path
          }`}
          width={500}
          height={300}
          alt="Movie Poster"
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <p className="text-2xl font-bold mb-3">{title ?? original_title}</p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            <span className="text-md">{overview}</span>
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            <span className="text-md">{release_date}</span>
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            <span className="text-md">{vote_average?.toFixed(1)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
