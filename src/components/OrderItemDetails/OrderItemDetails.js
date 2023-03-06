import React from 'react'
import CategoryHeader from '../Navbar/CategoryHeader'
import classes from './OrderItemDetails.module.css'
import StarIcon from '@mui/icons-material/Star';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { Step, StepLabel, Stepper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
const OrderItemDetails = () => {
  const steps = ['Order Confirmed', 'Shipped', 'Out For Delivery', 'Delivered'];
  const navigate=useNavigate()
  const location =useLocation()


  return (
    <>
            <CategoryHeader />
            <div className={classes.main}>
              <p className={classes.paginate}>Home &gt; My Account &gt; My Orders &gt; OD427238718424770100</p>
              {location.pathname==='/success'&&<div className={classes.cardBanner}>
                <img src='https://rukminim1.flixcart.com/www/114/30/promos/15/12/2017/97b55f5a-4c8b-410d-a2b4-81f01ecb411e.png?q=100' alt="" width="110px" height="30px"/>
                <p>Order Placed</p>
              </div>}
              <div className={classes.cardTop}>
                <div className={classes.topColumn}>
                  <h4>Delivery Address</h4>
                  <h5>Sumit Mishra</h5>
                  <p className={classes.address}>GS MEDICAL COLLEGE , Boys Hostel , Gate no. 2 Near Railway crossing , piplabandpur, Pilkhuwa - 245304, Uttar Pradesh</p>
                  <p><b>Phone number</b> 9653015245</p>
                  <p className={classes.trackingNumber}>This order is also tracked by 9653015245</p>
                </div>
                <div className={classes.topColumn}>
                <h4>Your Rewards</h4>

                <div className={classes.supercoin}><img src="https://rukminim1.flixcart.com/www/80/80/promos/15/07/2022/b24f2613-b89e-4e0a-8140-1316ad11f394.png?q=100" alt="" height="22px" width="22px"/>  12 SuperCoins</div>

                </div>
                <div className={classes.topColumn}>
                <h4>More actions</h4>
                <div  className={classes.invoiceDownload}>
                <p>Download Invoice</p>
                <div>Download</div>
                </div>
                <div  className={classes.invoiceDownload}>
                <p>Go to Orders</p>
                <div onClick={()=>{navigate('/orders')}}>Orders</div>
                </div>
                </div>
              </div>

              <div className={classes.cardBottom}>
                <div className={classes.orderItem}>
                  <img src="https://rukminim1.flixcart.com/image/xif0q/hair-treatment/w/1/9/27-5-toppik-hair-building-concealer-fibers-black-27-5-gm-osking-original-imagg8zejbw6ybuh.jpeg" alt=""/>
                  <div>
                    <h2>Osking Hair Growth Building Fiber 27.5gr...</h2>
                    <p>Seller: Stylazo Store</p>
                    <h3>₹362</h3>
                    <h4>4 Offers Applied</h4>
                    <p>Product has 10 days return policy</p>

                  </div>
                </div> 
                <div className={classes.orderTracking}>
                  <p>Your item is out for delivery</p>
                  <Stepper alternativeLabel activeStep={2}>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel >{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </div> 
                <div className={classes.orderRate}>


                  <p><StarIcon  sx={{width:'20px'}}/> Rate & Review Product</p>
                  <p><HelpCenterIcon sx={{width:'20px'}}/> Need help?</p>

                  </div> 
              </div>

            </div>


    </>
  )
}

export default OrderItemDetails