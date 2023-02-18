import React from 'react'
import classes from './CategoryHeader.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const CategoryHeader = () => {
    
  return (
    <div style={{marginTop:"56px"}} className={classes.main}>
        <ul className={classes.mainMenu}>
            <li>Electronics <KeyboardArrowDownIcon className={classes.dropdownIcon}/>
                <ul className={classes.subMenu}>
                    <p>Mobiles</p>
                    <li>Mi</li>
                    <li>Realme</li>
                    <li>Samsung</li>
                    <li>Infinix</li>
                    <li>OPPO</li>
                    <li>Apple</li>
                </ul>
            </li>
            <li className='mdHidden'>TVs & Appliances <KeyboardArrowDownIcon className={classes.dropdownIcon}/>
                <ul className={classes.subMenu}>
                    <p>Mobiles</p>
                    <li>Mi</li>
                    <li>Realme</li>
                    <li>OPPO</li>
                    <li>Apple</li>
                </ul>
            </li>
            <li>Men <KeyboardArrowDownIcon className={classes.dropdownIcon}/></li>
            <li>Women <KeyboardArrowDownIcon className={classes.dropdownIcon}/></li>
            <li className='smHidden'>Baby & Kids <KeyboardArrowDownIcon className={classes.dropdownIcon}/></li>
            <li className='lgHidden'>Home & Furniture <KeyboardArrowDownIcon className={classes.dropdownIcon}/></li>
            <li className='xlHidden'>Sports, Books & More <KeyboardArrowDownIcon className={classes.dropdownIcon}/></li>
            <li>Flights</li>
            <li className='xlHidden'>Offer Zone</li>
            <li >Grocery</li>
        </ul>

    </div>
  )
}

export default CategoryHeader