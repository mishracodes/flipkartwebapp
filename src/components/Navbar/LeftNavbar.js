import React from 'react'
import classes from './LeftNavbar.module.css'
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { uiAction } from '../../store/uiSlice';

const LeftNavbar = () => {
  const dispatch=useDispatch()

  return (
    <div className={classes.main}>
      <div className={classes.smMenu}>
        <div className={classes.header}>
          <div className={classes.userInfo}><PersonIcon sx={{ width: "28px", marginRight: '16px' }} /><p>Amit Mishra</p></div>
          <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png' alt='' />
        </div>
        <div className={classes.smMenuContainer}>
          <ul className={classes.list}>
            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/05/07/2019/37c19766-0af6-45c8-866a-720adfa534e2.png?q=60' alt=''/> SuperCoin Zone</li>
            
            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=60' alt=''/> FlipkartPlus Zone</li>
          </ul>
          
        </div>

        <div className={classes.smMenuContainer}>
          <ul className={classes.list}>
            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/13/11/2019/d19caf2b-e593-4e6b-93e5-a6c388210736.png?q=60' alt=''/> All Categories</li>
            
            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/26/01/2022/4495e6c3-7a67-4e74-b754-31aa3bd64272.png?q=60' alt=''/> Trending Stores <span className={classes.new}>NEW</span></li>
            
            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/15/06/2020/3c2eff2c-685f-4002-b3c9-d6942563af76.jpg?q=60' alt=''/> More on Flipkart</li>
          </ul>
          
        </div>

        <div className={classes.smMenuContainer}>
          <ul className={classes.list}>
            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/01/08/2019/23d1528b-d57d-440e-a21f-f374f518b6ed.png?q=60' alt=''/> Choose Language</li>
          </ul>
          
        </div>

        <div className={classes.smMenuContainer}>
          <ul className={classes.list}>
            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/08/04/2016/a12880b1-9c2b-4b4b-9029-31ba9ff666bf.png?q=60' alt=''/> Offer Zone</li>

            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/18/01/2019/c79d21c6-b201-42a7-b37c-6405c6c4fbf5.png?q=60' alt=''/> Sell on Flipkart</li>

          </ul>
          
        </div>

        <div className={classes.smMenuContainer}>
          <ul className={classes.list}>
            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=60' alt=''/> My Orders</li>

            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/31/08/2016/3afaefd4-3961-4cac-921c-b9517c96ad47.png?q=60' alt=''/> Coupons</li>

            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/10/03/2017/920f4fcd-8977-43a9-9014-abcad558de8d.png?q=60' alt=''/> My Cart</li>

            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/10/03/2017/1f81361d-9a8e-494a-bd15-6d647c9bd8a7.png?q=60' alt=''/> My Wishlist</li>

            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/07/04/2016/c35cca9e-2d7a-4583-9770-32a97ddf1c9b.png?q=60' alt=''/> My Account</li>

            <li className={classes.itemList}><img src='https://rukminim1.flixcart.com/www/100/14/promos/10/03/2017/f93182c9-5b3e-4f06-950d-c41745611f00.png?q=60' alt=''/> My Notifications</li>



          </ul>
          
        </div>
        <div className={classes.smMenuContainer}>
          <ul className={classes.list}>
              <li className={classes.itemList}>Help Center</li>

              <li className={classes.itemList}>Legal</li>

          </ul>
        </div>


      </div>
      <div className={classes.navbg} onClick={()=>dispatch(uiAction.toggleSmMenu())}></div>
    </div>
  )
}

export default LeftNavbar