import React, { useEffect, useState } from 'react'
import classes from './Category.module.css'
import CategoryItems from './CategoryItems'
const MainCategory = () => {
   const [categories, setcategories] = useState()
   const getCategories=async()=>{
    const result=await fetch('https://shipprkart.onrender.com/api/categories/list');
    const data= await result.json()    
    setcategories(data)
   }
   useEffect(() => {
    getCategories()
   }, [])
   
  return (
    <div  style={{marginTop:"56px"}} className={classes.main__category__container}>
        {categories&&categories.map((e,i)=>{
            return  <CategoryItems key={e._id} name={e.name} image={e.image} id={e._id} elementId={i} />
        })}
       
    </div>
  )
}

export default MainCategory