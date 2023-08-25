import React from 'react'
import Home from './Component/Home'
import SingleMovie from'./Component/SingleMovie'
import {  Route, Routes } from 'react-router-dom';
import  './App.css'
const App = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/:id' element={<SingleMovie />}></Route>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App

