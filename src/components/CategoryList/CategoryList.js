import React, { useState } from 'react'
import { useRef } from 'react'
import classes from './CategoryList.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const CategoryList = (props) => {

  const categoryListStartRef = useRef()
  const categoryListEndRef = useRef()
  const [nextButtonVisible, setnextButtonVisible] = useState(true)
  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const categoryList = [
    {
      id: 1,
      imgSrc: 'https://rukminim1.flixcart.com/image/200/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70',
      name: 'Top Deals of Camera Accessories',
      priceR: 'Shop Now!',
      category: 'Tripods, Gimbals, Bags..'
    },

    {
      id: 2,
      imgSrc: 'https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70',
      name: 'Printers',
      priceR: 'From ₹3999',
      category: 'HP'
    },

    {
      id: 3,
      imgSrc: 'https://rukminim1.flixcart.com/image/200/200/l5iid8w0/printer/l/z/7/-original-imagg6cmyt9yfvta.jpeg?q=70',
      name: 'Printers',
      priceR: 'From ₹2336',
      category: 'Canon'
    },

    {
      id: 4,
      imgSrc: 'https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70',
      name: 'Monitors',
      priceR: 'From ₹9999',
      category: 'SAMSUNG'
    },

    {
      id: 5,
      imgSrc: 'https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70',
      name: 'Top Mirrorless Cameras',
      priceR: 'Shop Now!',
      category: 'Canon, Sony, Fujifilm...'
    },

    {
      id: 6,
      imgSrc: 'https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70',
      name: 'Projectors',
      priceR: 'From ₹9999',
      category: 'ZEBRONICS'
    },

    {
      id: 7,
      imgSrc: 'https://rukminim1.flixcart.com/image/200/200/kgsb1jk0/monitor/f/d/z/vg27aql1a-tuf-vg27aql1a-asus-original-imafwyeptd8ysndr.jpeg?q=70',
      name: 'ASUS Monitors',
      priceR: 'From ₹4999',
      category: 'ASUS'
    },
    {
      id: 8,
      imgSrc: 'https://rukminim1.flixcart.com/image/200/200/l5iid8w0/printer/l/z/7/-original-imagg6cmyt9yfvta.jpeg?q=70',
      name: 'Printers',
      priceR: 'From ₹2336',
      category: 'Canon'
    },

    {
      id: 9,
      imgSrc: 'https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70',
      name: 'Monitors',
      priceR: 'From ₹9999',
      category: 'SAMSUNG'
    },

    {
      id: 10,
      imgSrc: 'https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70',
      name: 'Top Mirrorless Cameras',
      priceR: 'Shop Now!',
      category: 'Canon, Sony, Fujifilm...'
    },

  ]

  return (
    <div className={classes.main}>
      <div className={classes.categoryListContainer}>
        <div className={classes.mainImage} style={{ backgroundImage: `url(${props.mainImage})` }}>
          <div className={classes.mainName}>
            <h4>{props.mainName}</h4>
            <div className={classes.viewAll}>
              <a className={classes.viewAllUrl} href="https://www.flipkart.com/offers-list/content?screen=dynamic&amp;pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&amp;wid=2.dealCard.OMU&amp;wid=3.dealCard.OMU_3&amp;otracker=hp_omu_Best%2Bof%2BElectronics_3&amp;otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3">VIEW ALL</a>
            </div>
          </div>
        </div>
        <div className={classes.categoryList} >
          <div className={classes.categoryListChild}>
            <p ref={categoryListStartRef}></p>
            {categoryList.map((e) => {
              return (<div key={e.id} className={classes.category}>
                <a href="/" className={classes.categoryUrl}>
                  <div className={classes.categoryImage}>
                    <div className={classes.categoryImgContainer}>
                      <img src={e.imgSrc} alt="" />
                    </div>
                  </div>
                  <div className={classes.itemName}>{e.name}</div>
                  <div className={classes.priceRange}>{e.priceR}</div>
                  <div className={classes.itemCategory}>{e.category}</div>
                </a>
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
          <div className={classes.smlistViewAll}><a href="https://www.flipkart.com/offers-list/content?screen=dynamic&amp;pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&amp;wid=2.dealCard.OMU&amp;wid=3.dealCard.OMU_3&amp;otracker=hp_omu_Best%2Bof%2BElectronics_3&amp;otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3">View all</a></div>
        </div>
        <div className={classes.smlistItems}>
          <div  className={classes.itemOne}>
        {categoryList.map((e) => {
            return(<div key={e.id} className={classes.smItemCard}>
                <div className={classes.smItemImg}>
                  <div className={classes.smItemImgContainer}>
                    <img src={e.imgSrc} alt=''/>
                  </div>
                </div>
                <p>{e.category}</p>
                <h4>{e.name}</h4>
              </div>

           )
            })}
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default CategoryList