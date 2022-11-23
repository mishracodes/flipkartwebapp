import React from 'react'
import classes from './Category.module.css'
// import CategoryDropdown from './CategoryDropdown'

const CategoryItems = ({name,src}) => {
  return (
    <div className={`${classes.main__category__item}`}>
            <img alt='category_item' src={src} className={classes.main__category__item__img}/>
            <p className={classes.main__category__item__para}>{name}</p>
            {/* <CategoryDropdown/> */}
        </div>
  )
}

export default CategoryItems