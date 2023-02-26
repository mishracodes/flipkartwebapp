import React, { useState } from 'react'
import CategoryHeader from '../Navbar/CategoryHeader'
import classes from './ItemDetail.module.css'
import star from '../../Assets/star.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import rsymbol from '../../Assets/rsymbol.svg'
import Spinner from '../UI/Spinner';
import { cartActions } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
const ItemDetail = () => {
  const dispatch = useDispatch()
  const state = useLocation().state;
  const _id=state?._id
  const [cords, setcords] = useState({ x: 0, y: 0 })
  const [cordshover, setcordshover] = useState({ x: 0, y: 0 })
  const [modelOpacity, setmodelOpacity] = useState(0)
  const [itemDetails, setitemDetails] = useState(0)
  const [currentMainImage, setcurrentMainImage] = useState(0)

  const onThumbHoverHandler = (event) => {
    setcurrentMainImage(event.target.src)

  }
  const getCoords = (event) => {

    setcords({ x: 1.18 * event.clientX - 280, y: -300 + 2.1 * event.clientY })
    setcordshover({ x: event.clientX - 250, y: -160 + event.clientY })

  }

  const getItemDetails = async (_id) => {

    const result = await fetch(`https://shipprkart.onrender.com/api/products/details/${_id}`)
    const data = await result.json()
    setitemDetails(data.product)
    setcurrentMainImage(data.product.image[0])
  }
  useEffect(() => {
    getItemDetails(_id);
  }, [_id])


  return (
    <div>
      <CategoryHeader />
      {!itemDetails && <div className={classes.spinnerCenter}><Spinner /></div>}

      {itemDetails && <div className={classes.main}>
        <div className={classes.smAddCartButton}>
          <div onClick={() => { dispatch(cartActions.addToCart({ id: itemDetails._id, price: itemDetails.discountPrice, name: itemDetails.name, brand: itemDetails.brand, image:itemDetails.image[0], originalPrice: itemDetails.price, perOff: Math.round(((itemDetails.price - itemDetails.discountPrice) / itemDetails.price) * 100) })) }}><ShoppingCartIcon /> ADD TO CART</div>
          <div><FlashOnIcon /> BUY NOW</div>
        </div>
        <div className={classes.detailContainer}>


          <div className={classes.itemDetails}>
            <div className={classes.itemImages}>
              <div className={classes.itemThumbs}>
                {itemDetails.image.map(e => <img key={e} src={`https://wsrv.nl/?url=${e}`} alt="" onMouseOver={onThumbHoverHandler} />)}

              </div>
              <div className={classes.itemMainImage}>
                <div style={{ transform: `translate3d(${cordshover.x}px, ${cordshover.y}px, 0px)`, opacity: `${modelOpacity}` }} className={classes.pointerHover}></div>
                <img src={`https://wsrv.nl/?url=${currentMainImage}`} alt='' onMouseOver={() => { setmodelOpacity(1) }} onMouseOut={() => { setmodelOpacity(0) }} onMouseMove={getCoords} />
                <div className={classes.addCartButton}>
                  <div onClick={() => { dispatch(cartActions.addToCart({ id: itemDetails._id, price: itemDetails.discountPrice, name: itemDetails.name, brand: itemDetails.brand, image:itemDetails.image[0], originalPrice: itemDetails.price, perOff: Math.round(((itemDetails.price - itemDetails.discountPrice) / itemDetails.price) * 100) })) }}><ShoppingCartIcon /> ADD TO CART</div>
                  <div><FlashOnIcon /> BUY NOW</div>
                </div>

              </div>
            </div>
            <div className={classes.itemDescription}>
              <div className={classes.modelbox} style={{ opacity: `${modelOpacity}` }}>
                <img style={{ transform: `translate3d(-${cords.x}px, ${-cords.y}px, 0px)`, width: '1200px' }} src={`https://wsrv.nl/?url=${currentMainImage}`} alt='' />
              </div>
              <div className={classes.pagenation}>Home &nbsp; &gt; &nbsp; Wearable Smart Devices &nbsp; &gt; &nbsp; Smart Watches &nbsp; &gt; &nbsp; Fire-Boltt Smart Watches &nbsp; &gt; &nbsp;
                Fire-Boltt Cobra 1.78...</div>
              <div className={classes.itemTitle}>
                {itemDetails.name}
              </div>
              <div className={classes.starRating}>
                <span className={classes.starIcon}>
                  <div>{itemDetails.rate}<img src={star} alt="" /></div>
                </span>
                <span className={classes.rating}>{itemDetails.count} Ratings & {itemDetails.count} Reviews</span>
                {itemDetails.fAssured && <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" width={77} alt='' />}
              </div>
              <div className={classes.itemPrice}>
                <span>₹{itemDetails.discountPrice}</span>
                <span>₹{itemDetails.price}</span>
                <span>{Math.round(((itemDetails.price - itemDetails.discountPrice) / itemDetails.price) * 100)}% off</span>
              </div>

              <div className={classes.itemOffers}>
                <h2>Available offers</h2>
                <p><img src='https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' alt='' /> <span>Bank Offer</span>5% Cashback on Flipkart Axis Bank Card</p>

                <p><img src='https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' alt='' /> <span>Partner Offer</span>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</p>

                <p><img src='https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' alt='' /> <span>Partner Offer</span>Buy this product and get upto ₹500 off on Flipkart Furniture</p>

              </div>
              <div className={classes.itemInfo}>
                <h2>Delivery</h2>
                <div>
                  <p>560066</p>
                  <p>Delivery in 2 Days, Saturday</p>
                  <span>if ordered before 8:40 PM</span>
                </div>

              </div>

              <div className={classes.itemInfo}>
                <h2>Highlights</h2>
                <div>
                  <ul>
                    <li>Services :  <img src={rsymbol} height='16px' width='16px' alt='' />  Cash on Delivery available</li>
                    <li>EMI starting from ₹{Math.round(itemDetails.discountPrice * 0.1)}/month</li>
                    <li>Net banking & Credit/ Debit/ ATM card</li>
                  </ul>
                </div>

              </div>

              <div className={classes.itemInfo}>
                <h2>Seller</h2>
                <div>
                  <p>RetailNet</p>
                  <p>7 Days Replacement Policy</p>
                </div>

              </div>

              <img className={classes.promoBanner} src="https://rukminim1.flixcart.com/lockin/400/400/images/promotion_banner_v2_active.png?q=50" alt='' />


              <div className={classes.itemInfo}>
                <h2>Description</h2>
                <div>
                  <p>{itemDetails.description}.</p>

                </div>

              </div>
              <div className={classes.specsContainer}>
                <div className={classes.specsHeader}>Specifications</div>
                <div className={classes.specsDetails}>




                  {itemDetails?.specifications && Object.keys(itemDetails?.specifications).map(e => <div key={e} className={classes.specsItem}>
                    <div className={classes.specsTitle}>{e}</div>
                    <div className={classes.specsDesc}>{itemDetails.specifications[e]}</div>
                  </div>)}

                </div>

              </div>

            </div>
          </div>



        </div>
      </div>}

    </div>
  )
}

export default ItemDetail