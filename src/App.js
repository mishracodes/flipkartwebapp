import React from 'react'
import Header from './components/Navbar/Header'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Navbar/Footer'
import ItemsListV1 from './components/ItemsList/ItemsListV1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemsListV2 from './components/ItemsList/ItemsListV2'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Subcategory from './components/Subcategory/Subcategory'
 
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path="items/:id" element={<ItemsListV1 />} />
          <Route path="itemsv2/:id" element={<ItemsListV2 />} />
          <Route path="detail/:id" element={<ItemDetail />} />
          <Route path="category/:id" element={<Subcategory />} />
        </Routes>
      
      <Footer/>
      </BrowserRouter>
  )
}

export default App