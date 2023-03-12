import React from 'react'
import classes from './Cart.module.css'
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { doc, collection, setDoc } from 'firebase/firestore';
import db from '../../firebase';
import { useAuth0 } from '@auth0/auth0-react';
const Cart = () => {

    const cart=useSelector(state=>state.cart)
  const {loginWithRedirect,isAuthenticated } = useAuth0();

    const dispatch=useDispatch();

    const placeOrderHandler= async ()=>{
        const result = await fetch(`https://shipprkart.onrender.com/api/create-checkout-session`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({cart:cart.items, email:"mishracodes@gmail.com"})
        })
       const body= await result.json()
       
        const {url,id,email,cart:firebaseCart}=body
        localStorage.setItem("lastOderId", id);

        const orderRef = collection(db, "users", email, "orders");

        await setDoc(doc(orderRef,id),{cart:firebaseCart,order_placed:'pending'});
       
        window.location.href = url
        

    }


  return (
    <div className={classes.main}>
        {!isAuthenticated&&<div className={classes.notLoggedin}>
        <img src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt=''/>
        <h3>Missing Cart items?</h3>
        <p>Login to see the items you added previously</p>
        <button onClick={() => loginWithRedirect()}>Login</button>
        </div>}

        {isAuthenticated&&<div className={classes.cartContainer}>
            <div className={classes.leftBar}>
                <div className={classes.deliverTo}>
                    <div className={classes.deliveryName}>Deliver to: <span>Amit Kumar Mishra</span></div>
                    <div className={classes.deliveryAddress}>House no. 55, Near Kalindi Gas Godown Subabazar Khorabar, Gorakhpur</div>
                </div>
                <div className={classes.cartItemsContainer}>


                    {cart&&cart.items&&cart.items.map(e=><div key={e.id} className={classes.cartItem}>
                        <div className={classes.cartItemImage}><img src={`https://wsrv.nl/?url=${e.image}`} alt=''/></div>
                        <div className={classes.itemDesc}>
                            <h3>{e.name}</h3>
                            <p>Seller: {e.brand.slice(0,10)} <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" width={55} alt='' /></p>
                            <div className={classes.itemPrice}>
                                <span>₹{e.price}</span>
                                <span>₹{e.originalPrice}</span>
                                <span>{e.perOff} off</span>
                            </div>
                            <div className={classes.addRemoveButton}>
                                <button onClick={()=>{dispatch(cartActions.removeFromCart(e.id))}}>-</button>
                                <p>{e.quantity}</p>
                                <button  onClick={() => { dispatch(cartActions.addToCart({ id: e.id, price: e.price, name: e.name, brand: e.brand, image:e.image, originalPrice: e.originalPrice, perOff: e.perOff })) }}>+</button>
                            </div>
                        </div>

                    </div>)}





                    <div className={classes.placeOrder}>
                        <button disabled={cart.items.length===0?true:false} onClick={placeOrderHandler}>PLACE ORDER</button>

                    </div>


                </div>
            </div>
            <div className={classes.rightSidebar}>
                
                <div className={classes.priceDetails}>
                    <div className={classes.priceHeader}>PRICE DETAILS</div>
                    <div className={classes.priceDesc}>
                        <p><span>Price ({cart.totalQuantity} items)</span> <span>₹{cart.totalAmount+cart.discount}</span></p>
                        <p><span>Discount</span> <span className={classes.greenText}>{cart.discount>0?`- ₹${cart.discount}`:`₹0`}</span></p>
                        <p><span>Delivery Charges</span> <span className={classes.greenText}>{cart.totalAmount>0?'Free':'-'}</span></p>
                    </div>
                    <div className={classes.priceTotal}> <span>Total Amount</span> <span>₹{cart.totalAmount}</span></div>
                    <div className={classes.priceSave}>You will save ₹{cart.discount} on this order</div>
                </div>
                <div className={classes.safeSecure}>
                <GppGoodIcon sx={{width:'30px',height:'30px',color: '#5d5d5d'}}/><p>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                </div>
                

            </div>
            
        </div>}
    </div>
  )
}

export default Cart