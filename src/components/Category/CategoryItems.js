import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Category.module.css'
// import CategoryDropdown from './CategoryDropdown'

const CategoryItems = ({id,name,image,elementId}) => {
  return (
    <Link to={`/category/${name}`} className={`${classes.main__category__item} ${elementId>=9 && 'lgHidden'}`} >
            <img alt='category_item' src={image} className={classes.main__category__item__img}/>
            <p className={classes.main__category__item__para}>{name}</p>
            {/* <CategoryDropdown/> */}
    </Link>
  )
}
// ${elementId>=8 && 'mdHidden'} ${elementId>=6 && 'lgHidden'} ${elementId>=4 && 'mdHidden'} ${elementId>=3 && 'smHidden'}
export default CategoryItems