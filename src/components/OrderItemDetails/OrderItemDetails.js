import React, { useEffect, useState } from 'react'
import CategoryHeader from '../Navbar/CategoryHeader'
import classes from './OrderItemDetails.module.css'
import StarIcon from '@mui/icons-material/Star';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { Step, StepLabel, Stepper } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import db from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
const OrderItemDetails = () => {
  const steps = ['Order Confirmed', 'Shipped', 'Out For Delivery', 'Delivered'];
  const navigate=useNavigate()
  const location =useLocation()
  const [orderId, setorderId] = useState()
  const [orderDetails, setorderDetails] = useState()
  const {id}=useParams();

  useEffect(() => {


    if(location.pathname==='/success'&&localStorage.getItem("lastOderId"))
      setorderId(localStorage.getItem("lastOderId"))
    else if(id)
      setorderId(id)



      
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(orderId,orderDetails,"done");
  
  const getOrderDetails=async(orderId)=>{
  
    getDoc(doc(db, "users", "mishracodes@gmail.com", "orders", orderId)).then(docSnap => {
      if (docSnap.exists()) {
        setorderDetails(docSnap.data())
        
      } else {
        console.log("No such doc!");
      }
    })


  }

  useEffect(() => {
    if(orderId)
    getOrderDetails(orderId)
  }, [orderId])
  

  
 


  return (
    <>
            <CategoryHeader />
            {orderDetails&&<div className={classes.main}>
              <p className={classes.paginate}>Home &gt; My Account &gt; My Orders &gt; OD427238718424770100</p>
              {location.pathname==='/success'&&<div className={classes.cardBanner}>
                <img src='https://rukminim1.flixcart.com/www/114/30/promos/15/12/2017/97b55f5a-4c8b-410d-a2b4-81f01ecb411e.png?q=100' alt="" width="110px" height="30px"/>
                <p>Order Placed</p>
              </div>}
              <div className={classes.cardTop}>
                <div className={classes.topColumn}>
                  <h4>Delivery Address</h4>
                  <h5>{orderDetails.customer_details.name}</h5>             
                  <p className={classes.address}>{orderDetails.shipping_details.address.line1}, {orderDetails.shipping_details.address.city} - {orderDetails.shipping_details.address.postal_code}, {orderDetails.shipping_details.address.state}</p>
                  <p><b>Phone number</b> {orderDetails.customer_details.phone}</p>
                  <p><b>Email</b> {orderDetails.customer_details.email}</p>
                  <p className={classes.trackingNumber}>This order is also tracked by {orderDetails.customer_details.phone}</p>
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

              {orderDetails.cart.map(e=><div className={classes.cardBottom}>
                <div className={classes.orderItem}>
                  <img src={`https://wsrv.nl/?url=${e.image}`} alt=""/>
                  <div>
                    <h2>{e.name}</h2>
                    <p>Brand: {e.brand}</p>
                    <h3>₹{e.price}</h3>
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
              </div>)}

            </div>}


    </>
  )
}

export default OrderItemDetails