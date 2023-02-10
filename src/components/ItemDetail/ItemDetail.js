import React, { useState } from 'react'
import CategoryHeader from '../Navbar/CategoryHeader'
import classes from './ItemDetail.module.css'
import star from '../../Assets/star.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
const ItemDetail = () => {
  const [cords, setcords] = useState({x:0,y:0})
  const [cordshover, setcordshover] = useState({x:0,y:0})
  const [modelOpacity, setmodelOpacity] = useState(0)

  const getCoords=(event)=>{
   
    setcords({x: 1.18*event.clientX-280,y:-300 + 2.1*event.clientY})
    setcordshover({x: event.clientX-250,y:-160 + event.clientY})
  
  }
  return (
    <div>
      <CategoryHeader />
      <div className={classes.main}>
        <div className={classes.detailContainer}>

          <div className={classes.itemDetails}>
            <div className={classes.itemImages}>
              <div className={classes.itemThumbs}>
                <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/smartwatch/r/h/8/-original-imagma3fudxcqmrw.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/smartwatch/h/p/u/-original-imagma3fhx9dcayv.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/smartwatch/5/d/5/1-78-bsw086-android-ios-fire-boltt-yes-original-imagm82x4bawgvpe.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/smartwatch/5/d/5/1-78-bsw086-android-ios-fire-boltt-yes-original-imagm82x4bawgvpe.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/smartwatch/5/d/5/1-78-bsw086-android-ios-fire-boltt-yes-original-imagm82x4bawgvpe.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/smartwatch/5/d/5/1-78-bsw086-android-ios-fire-boltt-yes-original-imagm82x4bawgvpe.jpeg?q=70" alt="" />
              </div>
              <div className={classes.itemMainImage}>
              <div style={{transform: `translate3d(${cordshover.x}px, ${cordshover.y}px, 0px)`, opacity:`${modelOpacity}`}} className={classes.pointerHover}></div>
                <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70' alt='' onMouseOver={()=>{setmodelOpacity(1)}} onMouseOut={()=>{setmodelOpacity(0)}} onMouseMove={getCoords}/>
                <div className={classes.addCartButton}>
                  <div><ShoppingCartIcon/> ADD TO CART</div>
                  <div><FlashOnIcon/> BUY NOW</div>
                </div>

              </div>
            </div>
            <div className={classes.itemDescription}>
              <div className={classes.modelbox} style={{opacity:`${modelOpacity}`}}>
                <img style={{transform: `translate3d(-${cords.x}px, ${-cords.y}px, 0px)`, width:'1200px'}} src="https://rukminim1.flixcart.com/image/1664/1664/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=90" alt=''/>
              </div>
              <div className={classes.pagenation}>Home &nbsp; &gt; &nbsp; Wearable Smart Devices &nbsp; &gt; &nbsp; Smart Watches &nbsp; &gt; &nbsp; Fire-Boltt Smart Watches &nbsp; &gt; &nbsp;
                Fire-Boltt Cobra 1.78...</div>
              <div className={classes.itemTitle}>
                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetooth Calling with 123 Sports Modes. Smartwatch  (Black Strap, Free Size)
              </div>
              <div className={classes.starRating}>
                <span className={classes.starIcon}>
                  <div>4.3<img src={star} alt="" /></div>
                </span>
                <span className={classes.rating}>1,702 Ratings & 603 Reviews</span>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" width={77} alt='' />
              </div>
              <div className={classes.itemPrice}>
                <span>₹4,299</span>
                <span>₹19,999</span>
                <span>78% off</span>
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
                  <p>Delivery in2 Days, Saturday</p>
                  <span>if ordered before 8:40 PM</span>
                </div>

              </div>

              <div className={classes.itemInfo}>
                <h2>Highlights</h2>
                <div>
                  <ul>
                    <li>Large AMOLED Display : 1.78 inch screen with High Resolution of 368 x 448 Pixels. | Army Grade Build for very sturdy and rugged use with Camouflage colours</li>
                    <li>The first Fire-Boltt Smartwatch designed for the most challenging outdoor conditions. The watch has passed 15 military-grade toughness tests, including resistance to extreme heat, cold, humidity, and more</li>
                    <li>Supports Bluetooth Calling : Make seamless calls through the watch with bluetooth calling function with InBuilt Voice Assistance</li>
                    <li>It is Anti-Impact, Anti-Fluid Corrosion. The bottom and the bezel of Fire-Boltt COBRA is made of high strength-metal.</li>
                    <li>123 Sports Modes - Intelligent Sports Algorithm to track down the minutest of the details of your workout sessions. Monitor your Health, track Heart Rate, SpO2 on the go.</li>
                    <li>With Call Function</li>
                    <li>Touchscreen</li>
                    <li>Fitness & Outdoor</li>
                    <li>Battery Runtime: Upto 5 days</li>
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

              <img className={classes.promoBanner} src="https://rukminim1.flixcart.com/lockin/400/400/images/promotion_banner_v2_active.png?q=50" alt='' width='380px'/>


              <div className={classes.itemInfo}>
                <h2>Description</h2>
                <div>
                  <p>You can keep an eye on all the essential updates, notifications, and messages on your wrist with the help of the Fire-Boltt Cobra Smartwatch. Boasting an inbuilt dial pad, contact synchronisation, and call history features, this smartwatch makes it simple to make and receive calls. And, its inbuilt speaker and microphone ensure HD calling. Besides, thanks to its up to 4.521 cm (1.78) display and up to 368x448p high resolution, this smartwatch offers sharp, clear visuals. Moreover, the always-on display function in this smartwatch allows you to alternate between analogue and digital modes as necessary.</p>
                  
                </div>

              </div>

            </div>
          </div>



        </div>
      </div>

    </div>
  )
}

export default ItemDetail