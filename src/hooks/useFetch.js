import { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerm="") => {

    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const datajson = await response.json();
          setData(datajson.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}

export default useFetch
