import React from 'react'
import classes from './Header.module.css'
import logo from '../../Assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className={classes.nav__main}>
        <Link to='/'><img src={logo} alt="logo" className={classes.nav_main_logo}/></Link>
        <input type='text' placeholder='Search for products, brands and more'/>
        <p className={classes.nav__item__username}>Amit Mishra <ExpandMoreIcon className={classes.nav__item__expandmore_user} sx={{fontSize:"17px"}}/></p>
        <p>Become a Seller</p>
        <p className={classes.nav__item__more}>More <ExpandMoreIcon className={classes.nav__item__expandmore} sx={{fontSize:"17px"}}/></p>
        <p className={classes.nav__cart}> <ShoppingCartIcon /> Cart</p>
    </div>
  )
}

export default Header