import React from 'react'
import classes from './Footer.module.css'
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import HelpIcon from '@mui/icons-material/Help';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const Footer = () => {
    const iconStyle = { color: "#FFBB00", height: "20px", width: "20px" }
    return (
        <div className={classes.footer}>
            <div className={classes.footerTop}>

                <div><div className={classes.footerSubHead}>ABOUT</div>
                    <a href="/" className={classes.footerLink}>Contact Us</a>
                    <a href="/" className={classes.footerLink}>About Us</a>
                    <a href="/" className={classes.footerLink}>Careers</a>
                    <a href="/" className={classes.footerLink}>Flipkart Stories</a>
                    <a href="/" className={classes.footerLink}>Press</a>
                    <a href="/" className={classes.footerLink}>Flipkart Wholesale</a>
                    <a href="/" className={classes.footerLink}>Corporate Information</a>
                </div>

                <div><div className={classes.footerSubHead}>HELP</div>
                    <a href="/" className={classes.footerLink}>Payments</a>
                    <a href="/" className={classes.footerLink}>Shipping</a>
                    <a href="/" className={classes.footerLink}>Cancellation & Returns</a>
                    <a href="/" className={classes.footerLink}>FAQ</a>
                    <a href="/" className={classes.footerLink}>Report Infringement</a>
                </div>

                <div><div className={classes.footerSubHead}>POLICY</div>
                    <a href="/" className={classes.footerLink}>Return Policy</a>
                    <a href="/" className={classes.footerLink}>Terms Of Use</a>
                    <a href="/" className={classes.footerLink}>Security</a>
                    <a href="/" className={classes.footerLink}>Privacy</a>
                    <a href="/" className={classes.footerLink}>Sitemap</a>
                    <a href="/" className={classes.footerLink}>EPR Compliance</a>
                </div>

                <div className='smHidden'><div className={classes.footerSubHead}>SOCIAL</div>
                    <a href="/" className={classes.footerLink}>Facebook</a>
                    <a href="/" className={classes.footerLink}>Twitter</a>
                    <a href="/" className={classes.footerLink}>YouTube</a>
                </div>

                <div className='lgHidden'><div className={classes.footerSubHead}>Mail Us:</div>
                    <p className={classes.footerText}>Flipkart Internet Private Limited,</p>
                    <p className={classes.footerText}>Buildings Alyssa, Begonia &</p>
                    <p className={classes.footerText}>Clove Embassy Tech Village,</p>
                    <p className={classes.footerText}>Outer Ring Road, Devarabeesanahalli Village,</p>
                    <p className={classes.footerText}>Bengaluru, 560103,</p>
                    <p className={classes.footerText}>Karnataka, India</p>
                </div>

                <div><div className={classes.footerSubHead}>Registered Office Address:</div>
                    <p className={classes.footerText}>Flipkart Internet Private Limited,</p>
                    <p className={classes.footerText}>Buildings Alyssa, Begonia &</p>
                    <p className={classes.footerText}>Clove Embassy Tech Village,</p>
                    <p className={classes.footerText}>Outer Ring Road, Devarabeesanahalli Village,</p>
                    <p className={classes.footerText}>Bengaluru, 560103,</p>
                    <p className={classes.footerText}>Karnataka, India</p>
                    <p className={classes.footerText}>CIN : U51109KA2012PTC066107</p>
                    <p className={classes.footerText}>Telephone: 044-45614700</p>
                </div>
            </div>
            <div className={classes.footerBottom}>
                <div>
                    <WorkIcon sx={iconStyle} /><a href="/"><span  className='smHidden'>Become a Seller</span></a>
                </div>
                <div>
                    <StarsIcon sx={iconStyle} /><a href="/"><span  className='mdHidden'>Advertise</span></a>
                </div>
                <div>
                    <CardGiftcardIcon sx={iconStyle} /><a href="/"><span  className='smHidden'>Gift Cards</span></a>
                </div>
                <div>
                    <HelpIcon sx={iconStyle} /><a href="/"><span  className='smHidden'>Help Center</span></a>
                </div>
                <span>© 2003-2023 flipkartv2.netlify.app</span><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" className='xlHidden'/>
            </div>
        </div>
    )
}

export default Footer