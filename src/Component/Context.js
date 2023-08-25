import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

export const APi_url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`

const AppProvider = ({children})=>{
  const [loading,setloading]= useState(true)
  const [movie,setmovie]=useState([])
  const[error,seterror]=useState({show:false, msg:""})
  const [input,setinput] = useState('titanic')
  const getmovie = async(url) =>{
    setloading(true);
    try{
      const res =await fetch(url)
      const data = await res.json()
      console.log(data)
      if(data.Response === "True"){
        setloading("false")
        setmovie(data.Search)
        seterror({
          show:false,
          msg:""
        })
      }else{
        seterror({
          show:true,
          msg:data.Error
        })
      }
    }catch(err){
        console.log()
    }
  }
  useEffect(()=>{
   let timerout = setTimeout(()=>{
      getmovie(`${APi_url}&s=${input}`)
    },500);
    return()=>clearTimeout(timerout)
  },[input])

  return <AppContext.Provider value={{loading,error,movie,input,setinput}}>{children}</AppContext.Provider>
}


const useGlobalcontext =()=>{
  return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalcontext};
