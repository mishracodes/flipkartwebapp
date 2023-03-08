import React, { useEffect, useState } from 'react'
import CategoryHeader from '../Navbar/CategoryHeader'
import classes from './OrderHistory.module.css'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../firebase';

const OrderHistory = () => {
  const [orderHistory, setorderHistory] = useState([])

  const getOrderHistory=async()=>{
    const orderRef = query(collection(db, "users", "mishracodes@gmail.com", "orders"),where("order_placed", "==", "success"))

    const querySnapshot = await getDocs(orderRef)
    querySnapshot.forEach((docSnapshot)=>{
          setorderHistory(prev=>prev.concat({
            id:docSnapshot.id,
            data: docSnapshot.data().cart,
            timestamp:docSnapshot.data().timestamp}))
    })
  }

    useEffect(() => {
      getOrderHistory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <>
        <CategoryHeader />

        <div className={classes.main}>
        <p className={classes.paginate}>Home &gt; My Account &gt; My Orders</p>

           {orderHistory&&orderHistory.map((elem)=>{return(<div key={elem.id}>
            {elem.data.map(e=><Link to={`/order_details/${elem.id}`} key={e.id} className={classes.card}>
            <div className={classes.itemImage}><img src={`https://wsrv.nl/?url=${e.image}`} alt=''/></div>
            <div className={classes.itemDetails}>
                <div><p className={classes.itemName}>{e.name}</p></div>
                <div><p className={classes.itemPrice}>₹{e.price}</p></div>
                <div>       
                    <p className={classes.expectedDelivery}><span></span>Ordered on {elem.timestamp&&elem.timestamp.toDate().toDateString()
                     } </p>
                    <p className={classes.deliveryStatus}>Your item has been delivered</p>
                    <p className={classes.rateReview}><StarIcon sx={{width:'20px'}}/> Rate & Review Product</p>
                </div>
            </div>
            </Link>)}
           
           </div>)})}
        </div>
    </>
  )
}

export default OrderHistory