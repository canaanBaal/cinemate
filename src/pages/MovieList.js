// import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import Card from "../components/Card";

const MovieList = ({apiPath, title}) => {

  const { data: movies } = useFetch(apiPath);

  useTitle(title);
  // useEffect(() => {
  //   document.title = `${title} - Cinemate`
  // })

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          )) }
        </div>
      </section>
    </main>
  )
}

export default MovieList


// "https://api.themoviedb.org/3/movie/now_playing?api_key=c3bd37d44e3983e848ab48cbab91470e"
