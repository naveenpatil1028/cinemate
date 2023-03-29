import React from 'react'
import {Routes,Route} from 'react-router-dom'
import MovieList from '../pages/MovieList'
import PageNotFound from '../pages/PageNotFound';
import Search from '../pages/Search';
import MovieDetail from './../pages/MovieDetail';
function AllRoutes() {
  return (
    <div className='dark:bg-darkbg'>
    <Routes>
        <Route path='/' element={<MovieList api="movie/now_playing" title='Home'/>}/>
        <Route path='/movie/:id' element={<MovieDetail/>}/>
        <Route path='/movies/popular' element={<MovieList api='movie/popular' title='Popular'/>}/>
        <Route path='/movies/top' element={<MovieList api='movie/top_rated' title='Top Rated'/>}/>
        <Route path='/movies/upcoming' element={<MovieList api='movie/upcoming' title='Upcoming'/>}/>
        <Route path='/search' element={<Search api='search/movie'/>}/>
        <Route path='*' element={<PageNotFound  title='Page Not Found'/>}/>
    </Routes>
    </div>
  )
}

export default AllRoutes