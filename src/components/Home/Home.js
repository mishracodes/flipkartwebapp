import React from 'react'
import Carousel from '../Carousel/Carousel'
import MainCategory from '../Category/MainCategory'
import CategoryList from '../CategoryList/CategoryList'
// import CuratedCategoryList from '../CategoryList/CuratedCategoryList'
// import classes from './Home.module.css'

const Home = () => {


  return (
    <div className='body__margin__gap'>
      <MainCategory />

      <Carousel />

      <CategoryList subcategory='Gaming' mainName="Best of Electronics" mainImage="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
      <CategoryList subcategory='Toys' mainName="Beauty, Food, Toys & more" mainImage="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90" />
      <CategoryList subcategory='Home' mainName="Home & Kitchen Essentials" mainImage="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90" />
      {/* <CuratedCategoryList /> */}
      <CategoryList subcategory='Watches' mainName="Discounts for you" mainImage="" />
    </div>
  )
}

export default Home