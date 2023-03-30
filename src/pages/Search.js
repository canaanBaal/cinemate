
import { useSearchParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import useFetch from "../hooks/useFetch";
import { Card } from "../components";

const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);
  // useEffect(() => {
  //   document.title = `Search result for ${queryTerm} - Cinemate`
  // })

  return (
    <main>
      <p className="text-3xl text-gray-700 dark:text-white">
        {movies.length === 0 ? `No result found for '${queryTerm}'` : `Results for '${queryTerm}'`}
      </p>

      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap ">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          )) }
        </div>
      </section>
    </main>
  )
}

export default Search
