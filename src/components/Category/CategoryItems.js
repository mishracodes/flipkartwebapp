import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Category.module.css'
// import CategoryDropdown from './CategoryDropdown'

const CategoryItems = ({id,name,image,elementId}) => {
  return (
    <Link to='/items/name' className={`${classes.main__category__item} ${elementId>=8 && 'xlHidden'} ${elementId>=6 && 'lgHidden'} ${elementId>=4 && 'mdHidden'} ${elementId>=3 && 'smHidden'}`} >
            <img alt='category_item' src={image} className={classes.main__category__item__img}/>
            <p className={classes.main__category__item__para}>{name}</p>
            {/* <CategoryDropdown/> */}
        </Link>
  )
}

export default CategoryItems