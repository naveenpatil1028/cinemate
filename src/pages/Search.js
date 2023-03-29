import React from 'react'
import {useSearchParams} from 'react-router-dom'
import Card from '../components/Card'
import useFetch from './../hooks/useFetch';


function Search({api}) {
  const [searchParams]= useSearchParams()
  const queryTerm=searchParams.get('q')
  const {data:movies}=useFetch(api,queryTerm)
  return (
    <main>
      {movies.length === 0?
      <section>
      <p className='text-3xl text-gray-700 dark:text-white'>No Movie Found for "{queryTerm}"</p>
    </section>:
     <section className='max-w-7xl mx-auto py-7'>
      <p className='text-3xl text-gray-700 dark:text-white'>Results for : "{queryTerm}"</p>
     <div className='flex justify-start flex-wrap'>
      {movies.map((movie)=>{
      return <Card key={movie.id} movie={movie}/>
      })}
     </div>
   </section>
     }
      
   
  </main>
  )
}

export default Search