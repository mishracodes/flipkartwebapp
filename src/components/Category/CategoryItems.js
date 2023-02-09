import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Category.module.css'
// import CategoryDropdown from './CategoryDropdown'

const CategoryItems = ({name,src}) => {
  return (
    <Link to='/items/name' className={`${classes.main__category__item}`}>
            <img alt='category_item' src={src} className={classes.main__category__item__img}/>
            <p className={classes.main__category__item__para}>{name}</p>
            {/* <CategoryDropdown/> */}
        </Link>
  )
}

export default CategoryItems