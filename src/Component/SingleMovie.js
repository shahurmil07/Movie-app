import React,{useState,useEffect} from 'react'
import { useParams,NavLink } from 'react-router-dom'
import {APi_url} from './Context'

const SingleMovie = () => {
  const{id} = useParams();
  const [loading,setloading]= useState(true)
  const [movie,setmovie]=useState("")
  const getmovie = async(url) =>{
    setloading(true)
    try{
      const res =await fetch(url)
      const data = await res.json()
      console.log(data)
      if(data.Response === "True"){
        setloading(false)
        setmovie(data)
      }
    }catch(err){
        console.log(err)
    }
  }
  useEffect(()=>{
   let timerout = setTimeout(()=>{
      getmovie(`${APi_url}&i=${id}`)
    },800);
    return()=>clearTimeout(timerout)
  },[id])

  if(loading){
    return(
      <div className='loading-section'>
            <div className='loading'>
              <p className='typing'>Loading....</p>
            </div>
      </div>
    )
  }
  return (
        <section className='single-movie'>
          <div className='movie-card'>
            <figure>
              <img src={movie.Poster} />
            </figure>
            <div className='card-text'>
              <p className='movie-title'>{movie.Title}</p>
              <p className='movie-text'>{movie.Released}</p>
              <p className='movie-text'>{movie.Genre}</p>
              <p className='movie-text'>{movie.imdbRating}</p>
              <p className='movie-text'>{movie.Country}</p>
              <NavLink to='/' className='back-btn'>Go Back</NavLink>
            </div>
          </div>
        </section>
  )
}

export default SingleMovie
