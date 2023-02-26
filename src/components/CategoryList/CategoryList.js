import React, { useState } from 'react'
import { useRef } from 'react'
import classes from './CategoryList.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const imageLoadError=(source)=>{
  source.target.src = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
      source.onerror = "";
      return true;
}

const CategoryList = (props) => {

  const categoryListStartRef = useRef()
  const categoryListEndRef = useRef()
  const [nextButtonVisible, setnextButtonVisible] = useState(true)
  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }



  const [itemsList, setitemsList] = useState()
    const getCategories = async () => {
        const result = await fetch(`https://shipprkart.onrender.com/api/products/list/limitsubcategory/${props.subcategory}/10`);
        const data = await result.json()
        setitemsList(data)
    }
    useEffect(() => {
        getCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  
  return (
    <div className={classes.main}>
      <div className={classes.categoryListContainer}>
        <div className={classes.mainImage} style={{ backgroundImage: `url(${props.mainImage})` }}>
          <div className={classes.mainName}>
            <h4>{props.mainName}</h4>
            <div className={classes.viewAll}>
              <Link className={classes.viewAllUrl} to={`/items/${props.subcategory}`}>VIEW ALL</Link>
            </div>
          </div>
        </div>
        <div className={classes.categoryList} >
          <div className={classes.categoryListChild}>
            <p ref={categoryListStartRef}></p>
            {itemsList&&itemsList.products.map((e) => {
              return (<div key={e._id} className={classes.category}>
                <Link to={`/detail/${e.name}`} className={classes.categoryUrl} state={{_id: e._id}}>
                  <div className={classes.categoryImage}>
                    <div className={classes.categoryImgContainer}>
                      <img src={`https://wsrv.nl/?url=${e.image[0]}`} alt="" />
                    </div>
                  </div>
                  <div className={classes.itemName}>{e.name}</div>
                  <div className={classes.priceRange}>{e.discountPrice}</div>
                  <div className={classes.itemCategory}>{e.subcategory}</div>
                </Link>
              </div>)
            })}
            <p ref={categoryListEndRef}></p>

          </div>

          {!nextButtonVisible && <button className={classes.categoryListprev} type="button" onClick={() => { scrollIntoView(categoryListStartRef); setnextButtonVisible(true) }}>
            <ArrowBackIosNewIcon />
          </button>}
          {nextButtonVisible && <button className={classes.categoryListnext} type="button" onClick={() => { scrollIntoView(categoryListEndRef); setnextButtonVisible(false) }}>
            <ArrowForwardIosIcon />
          </button>}

        </div>
      </div>
      <div className={classes.categoryListContainerSm}>
        <div className={classes.smlistHead}>
          <h4>{props.mainName}</h4>
          <div className={classes.smlistViewAll}><Link  to={`/items/${props.subcategory}`}>View all</Link></div>
          
        </div>
        <div className={classes.smlistItems}>
          <div  className={classes.itemOne}>
        {itemsList&&itemsList.products.map((e) => {
            return(<Link to={`/detail/${e.name}`} key={e._id} className={classes.smItemCard} state={{_id: e._id}}>
                <div className={classes.smItemImg}>
                  <div className={classes.smItemImgContainer}>
                    <img onError={imageLoadError} src={`https://wsrv.nl/?url=${e.image[0]}`} alt=''/>
                  </div>
                </div>
                <p>{e.subcategory}</p>
                <h4>{e.name}</h4>
              </Link>

           )
            })}
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default CategoryList