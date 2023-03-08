import React, { useState } from 'react'
import classes from './Header.module.css'
import logo from '../../Assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Header = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const searchHandler = (event) => {
    event.preventDefault();
    navigate(`items/${inputText.trim()}`, { state: { url: inputText.trim() } });
    setInputText("")

  }
  const inputHandler = (event) => {
    setInputText(event.target.value)
  }
  const cart = useSelector(state => state.cart)
  return (
    <div className={classes.nav__main}>
      <Link to='/'><img src={logo} alt="logo" className={classes.nav_main_logo} /></Link>
      <form onSubmit={searchHandler}><input name='search' value={inputText} onChange={inputHandler} type='text' placeholder='Search for products, brands and more' className='smHidden' /></form>
      <p className={classes.nav__item__username}>Amit Mishra <ExpandMoreIcon className={classes.nav__item__expandmore_user} sx={{ fontSize: "17px" }} />
        <div className={classes.subMenu}>
          <Link to="/orders" className={classes.links}><p><AccountCircleIcon sx={{width:"16px", marginRight:'10px',color:'#2874f0'}}/>My Profile</p></Link>
          <Link to="/orders" className={classes.links}><p><UnarchiveIcon sx={{width:"16px", marginRight:'10px',color:'#2874f0'}}/>Orders</p></Link>
          <Link to="/orders" className={classes.links}><p><FavoriteIcon sx={{width:"16px", marginRight:'10px',color:'#2874f0'}}/>Wishlist</p></Link>
          <Link to='/' className={classes.links}><p><PowerSettingsNewIcon sx={{width:"16px", marginRight:'10px',color:'#2874f0'}}/>Logout</p></Link>
        </div>
      </p>
      <p className='xlHidden'>Become a Seller</p>
      <p className={`${classes.nav__item__more} lgHidden`}>More <ExpandMoreIcon className={classes.nav__item__expandmore} sx={{ fontSize: "17px" }} /></p>
      <p className={classes.nav__cart}><Link to='/cart' className={classes.cartLink}> <ShoppingCartIcon /> <span className='smHidden'>Cart</span> <span className={classes.cartBadge}>{cart.totalQuantity}</span></Link></p>
    </div>
  )
}

export default Header