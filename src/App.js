import React from 'react'
import Carousel from './components/Carousel/Carousel'
import MainCategory from './components/Category/MainCategory'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainCategory/>
      <div className="body__margin__gap">
        <Carousel/>
        <Home/>
      </div>
    </div>
  )
}

export default App