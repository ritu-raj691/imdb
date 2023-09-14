import Results from "./Results";

const API_KEY = process.env.API_KEY;

const Home = async (props: any) => {
  const genre: string = props?.searchParams?.genre ?? "fetchTrending";
  const baseUrl: string = "https://api.themoviedb.org/3/";
  const url: string = `${baseUrl}${
    genre?.toLowerCase() === "fetchTrending".toLowerCase()
      ? `trending/movie/week?api_key=${API_KEY}&language=en-US`
      : `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  }`;

  const res = await fetch(url, { next: { revalidate: 10000 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data"); //This will be caught by error page and pass to the page as props
  }

  const data = await res.json();
  const results = data?.results;

  return <Results results={results} />;
};

export default Home;
