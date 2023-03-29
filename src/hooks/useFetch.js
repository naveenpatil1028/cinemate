import { useEffect, useState } from "react"
  
function useFetch(api,queryTerm='') {
  const [data, setData] = useState([])
  const url=`https://api.themoviedb.org/3/${api}?api_key=5d2727aff04c14eef73497286997da24&query=${queryTerm}`

  useEffect(() => {
    const fetchMovies=async()=>{
      const response=await fetch(url);
      const json=await response.json()
      setData(json.results)
    }
    fetchMovies();
  }, [url])

  return {data}
} 

export default useFetch