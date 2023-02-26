import React, { useState } from 'react'
import classes from './Header.module.css'
import logo from '../../Assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate=useNavigate();
  const [inputText,setInputText]=useState("");
  const searchHandler=(event)=>{
    event.preventDefault();
    navigate(`items/${inputText.trim()}`,{state:{url:inputText.trim()}});
    setInputText("")

  }
  const inputHandler=(event)=>{
    setInputText(event.target.value)
  }
  const items=useSelector(state=>state.cart.items)
  return (
    <div className={classes.nav__main}>
        <Link to='/'><img src={logo} alt="logo" className={classes.nav_main_logo}/></Link>
        <form onSubmit={searchHandler}><input name='search' value={inputText} onChange={inputHandler} type='text' placeholder='Search for products, brands and more' className='smHidden'/></form>
        <p className={classes.nav__item__username}>Amit Mishra <ExpandMoreIcon className={classes.nav__item__expandmore_user} sx={{fontSize:"17px"}}/></p>
        <p className='xlHidden'>Become a Seller</p>
        <p className={`${classes.nav__item__more} lgHidden`}>More <ExpandMoreIcon className={classes.nav__item__expandmore} sx={{fontSize:"17px"}}/></p>
        <p className={classes.nav__cart}> <ShoppingCartIcon /> <span className='smHidden'>Cart</span> <span className={classes.cartBadge}>{items.length}</span></p>
    </div>
  )
}

export default Header