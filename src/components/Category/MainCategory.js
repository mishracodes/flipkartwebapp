import React from 'react'
import classes from './Category.module.css'
import CategoryItems from './CategoryItems'
const MainCategory = () => {
    const categories=[
        {name:"Top Deals",
         src:"assets/f15c02bfeb02d15d.png"},
         {name:"Grocery",
         src:"assets/29327f40e9c4d26b.png"},
         {name:"Mobiles",
         src:"assets/22fddf3c7da4c4f4.png"},
         {name:"Fashion",
         src:"assets/c12afc017e6f24cb.png"},
         {name:"Electronics",
         src:"assets/69c6589653afdb9a.png"},
         {name:"Home",
         src:"assets/ab7e2b022a4587dd.jpg"},
         {name:"Appliances",
         src:"assets/0ff199d1bd27eb98.png"},
         {name:"Travel",
         src:"assets/71050627a56b4693.png"},
         {name:"Beauty, Toys & More",
         src:"assets/dff3f7adcf3a90c6.png"},
         {name:"2 - Wheelers",
         src:"assets/05d708653beff580.png"},
    ]
  return (
    <div  style={{marginTop:"56px"}} className={classes.main__category__container}>
        {categories.map((e)=>{
            return  <CategoryItems key={e.src} name={e.name} src={e.src} />
        })}
       
    </div>
  )
}

export default MainCategory