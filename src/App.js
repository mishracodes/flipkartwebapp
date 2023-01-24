import React from 'react'
import Carousel from './components/Carousel/Carousel'
import MainCategory from './components/Category/MainCategory'
import Header from './components/Navbar/Header'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Navbar/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <MainCategory/>
      <div className="body__margin__gap">
        <Carousel/>
        <Home/>
      </div>
      <Footer/>
    </div>
  )
}

export default App