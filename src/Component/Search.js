import React from 'react'
import { useGlobalcontext } from './Context'

const Search = () => {
  const {input,setinput,error} = useGlobalcontext();
  return (
    <div>
  <section className='search'>
    <h2>Search your favourite Movie</h2>
    <form onSubmit={(e)=> e.preventDefault()}> 
      <div className='search-input'>
        <input type='text' placeholder='Search Movie' value={input} onChange={(e)=>setinput(e.target.value)}></input>
      </div>
    </form>
    <div className='error'>
      <p>{error.show && error.msg}</p>
    </div>
  </section>
  
      
    </div>
  )
}

export default Search
