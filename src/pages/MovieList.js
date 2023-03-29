import React, { useEffect } from 'react'
import Card from '../components/Card'
import useFetch from './../hooks/useFetch';

function MovieList({api,title}) {
  const {data:movies}=useFetch(api)

  useEffect(() => {
    document.title=`${title}/Cinemate`
  }, [title])

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>
         {movies.map((movie)=>{
         return <Card key={movie.id} movie={movie}/>
         })}
        </div>
      </section>
    </main>
  )
}

export default MovieList