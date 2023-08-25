import React from 'react'
import { useGlobalcontext } from './Context'
import { NavLink } from 'react-router-dom';
// import React from 'react-dom';

const Movie = () => {
  const { movie} = useGlobalcontext();
  return (
    
      <div>
        <section className='main'>
          <div className='grid'>


            {movie.map((curMovie) => {
              const { imdbID, Title, Poster } = curMovie
              const mname = Title.substring(0,15)
              return (
                <NavLink to={`/movie/${imdbID}`} key={imdbID}>
                  <div className='card'>
                    <div className='card-inner'>
                      <h2>{mname.length>=15 ? `${mname}...` : mname}</h2>
                      <img src={Poster} alt={imdbID}></img>
                    </div>
                  </div>
                </NavLink>
              )
            })}
          </div>
        </section>
      </div>
    
  )
}

export default Movie
