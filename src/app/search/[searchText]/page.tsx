import Results from "../../Results";

export interface ISearchPage {
  params: {
    searchText: string;
  };
  searchParams: any;
}

const SearchPage = async (props: ISearchPage) => {
    const searchText = props?.params?.searchText;
    const url: string = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchText}&language=en-US&include_adult=false`;
    const res = await fetch(url);
    
    if(!res.ok) {
        throw new Error("Error fetching movie!!!");
    }
    const data= await res?.json();
    const results = data?.results;
    
  return (
    <div className="w-full">
        {results?.length ? <Results results={results} /> :  <p className="text-lg text-center pt-6">No Movies found</p>}
    </div>
  )
}

export default SearchPage;
