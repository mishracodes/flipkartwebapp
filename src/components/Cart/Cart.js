import React from 'react'
import classes from './Cart.module.css'
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useSelector } from 'react-redux';
const Cart = () => {

    const cart=useSelector(state=>state.cart)
  return (
    <div className={classes.main}>
        <div className={classes.cartContainer}>
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
                                <button>-</button>
                                <p>{e.quantity}</p>
                                <button>+</button>
                            </div>
                        </div>

                    </div>)}





                    <div className={classes.placeOrder}>
                        <button>PLACE ORDER</button>

                    </div>


                </div>
            </div>
            <div className={classes.rightSidebar}>
                
                <div className={classes.priceDetails}>
                    <div className={classes.priceHeader}>PRICE DETAILS</div>
                    <div className={classes.priceDesc}>
                        <p><span>Price ({cart.totalQuantity} items)</span> <span>₹{cart.totalAmount+cart.discount}</span></p>
                        <p><span>Discount</span> <span className={classes.greenText}>− ₹{cart.discount}</span></p>
                        <p><span>Delivery Charges</span> <span className={classes.greenText}>Free</span></p>
                    </div>
                    <div className={classes.priceTotal}> <span>Total Amount</span> <span>₹{cart.totalAmount}</span></div>
                    <div className={classes.priceSave}>You will save ₹{cart.discount} on this order</div>
                </div>
                <div className={classes.safeSecure}>
                <GppGoodIcon sx={{width:'30px',height:'30px',color: '#5d5d5d'}}/><p>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                </div>
                

            </div>
            
        </div>
    </div>
  )
}

export default Cart