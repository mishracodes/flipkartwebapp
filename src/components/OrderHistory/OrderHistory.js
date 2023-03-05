import React from 'react'
import CategoryHeader from '../Navbar/CategoryHeader'
import classes from './OrderHistory.module.css'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const id="OD427238718424770100";
  return (
    <>
        <CategoryHeader />

        <div className={classes.main}>
        <p className={classes.paginate}>Home &gt; My Account &gt; My Orders</p>

           { new Array(6).fill(0).map((e,i)=><Link to={`/order_details/${id}`} key={i} className={classes.card}>
            <div className={classes.itemImage}><img src='https://rukminim1.flixcart.com/image/xif0q/body-wash/4/h/g/-original-imaggc3rzzfgm2hk.jpeg' alt=''/></div>
            <div className={classes.itemDetails}>
                <div><p className={classes.itemName}>Pears Soft & Fresh Shower Gel, Super Sav...</p></div>
                <div><p className={classes.itemPrice}>₹315</p></div>
                <div>       
                    <p className={classes.expectedDelivery}><span></span>Delivered on Feb 25</p>
                    <p className={classes.deliveryStatus}>Your item has been delivered</p>
                    <p className={classes.rateReview}><StarIcon sx={{width:'20px'}}/> Rate & Review Product</p>
                </div>
            </div>
           </Link>)}
        </div>
    </>
  )
}

export default OrderHistory