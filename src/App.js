import React from 'react'
import Carousel from './components/Carousel/Carousel'
import MainCategory from './components/Category/MainCategory'
import Header from './components/Navbar/Header'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Navbar/Footer'
import CategoryHeader from './components/Navbar/CategoryHeader'
import ItemsListV1 from './components/ItemsList/ItemsListV1'

const App = () => {
  return (
    <div>
      <Header/>
      <CategoryHeader />
      {/* <MainCategory/> */}
      <div className="body__margin__gap">
        {/* <Carousel/>
        <Home/> */}
        <ItemsListV1/>
      </div>
      <Footer/>
    </div>
  )
}

export default App