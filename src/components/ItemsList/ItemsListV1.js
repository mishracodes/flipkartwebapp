import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'
import classes from './ItemsListV1.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryHeader from '../Navbar/CategoryHeader';
import star from '../../Assets/star.svg'
import { Link } from 'react-router-dom';
function valuetext(value) {
    return `${value}°C`;
}

const ItemsListV1 = () => {

    const [value, setValue] = useState([0, 20001]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <CategoryHeader />


            <div className={`${classes.main} body__margin__gap`}>
                <div className={classes.filterBar}>
                    <div className={classes.heading}>
                        Filters
                    </div>
                    <div className={classes.categories}>
                        <h2>Categories</h2>
                        <p>&lt; Wearable Devices</p>
                        <ul>
                            <li>Smart Watches</li>
                            <li>Smart Bands</li>
                            <li>Smart Headphones</li>
                            <li>Smart Glasses</li>
                        </ul>
                    </div>
                    <div className={classes.price}>
                        <h2>Price</h2>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            step={2000}
                            marks
                            min={0}
                            max={20000}
                        />
                        <p>Min: {value[0]}<span>to</span>Max: {value[1]}</p>
                    </div>
                    <div className={classes.supercoin}>
                        <div className={classes.checkbox}>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <div className={classes.supercoinprice}>SUPERCOINS PRICE</div>
                            <div className={classes.supercoinbal}>Balance: <img width="12px" src="https://rukminim1.flixcart.com/www/100/100/promos/08/07/2019/7e4ee41e-ce86-43e0-834e-485eaf5a3cfb.png?q=90" alt="" />223</div>
                        </div>



                    </div>
                    <div className={classes.fassured}>
                        <div className={classes.checkbox}>
                            <input type="checkbox" />
                        </div>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" width={77} alt='' />
                    </div>
                    <div className={classes.delivery1day}>
                        <div className={classes.checkbox}>
                            <input type="checkbox" />
                        </div>
                        <span> Delivery in 1 day</span>
                    </div>
                    <div className={classes.customerratings}>
                        <h2>Customer Ratings</h2>
                        <div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" />
                            </div>
                            <span>4★ & above</span>
                        </div>
                        <div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" />
                            </div>
                            <span>3★ & above</span>
                        </div>

                    </div>

                    <Accordion className={classes.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>COMPATIBLE OS</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <input type="checkbox" /> Android <br />
                            <input type="checkbox" /> Android % iOS<br />
                            <input type="checkbox" /> iOS <br />
                            <input type="checkbox" /> Propriteriry OS <br />

                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className={classes.mainBar}>
                    <div className={classes.mainBar__header}>
                        <div className={classes.pagenation}>Home &nbsp; &gt; &nbsp; Wearable Devices</div>
                    </div>
                    <div className={classes.mainBar__title}>
                        <h2>Wearable Devices</h2>
                        <p>(Showing 1 – 40 products of 53,848 products)</p>
                    </div>
                    <div className={classes.mainBar__shortBy}>
                        <h2>Short By</h2>
                        <p className={classes.active}>Popularity</p>
                        <p>Price--Low to High</p>
                        <p>Price--High to Low</p>
                    </div>
                    <div className={classes.itemsContainer}>



                        


                        {/* Item goes here /////////////// */}
                        <div className={classes.item}>
                            <div className={classes.itemHolder}>
                                <div className={classes.itemImageholder}>
                                    <Link to="/detail/watch"><img height="200px" width="200px" src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt=""/></Link>
                                    <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></span></div>
                                </div>
                                <div className={classes.itemTitle}>
                                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetoo...
                                </div>
                                <div className={classes.itemDesc}>
                                    Black Strap, Free Size
                                </div>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>142.5</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                            </div>

                        </div>

                        


                        {/* Item goes here /////////////// */}
                        <div className={classes.item}>
                            <div className={classes.itemHolder}>
                                <div className={classes.itemImageholder}>
                                    <Link to="/detail/watch"><img height="200px" width="200px" src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt=""/></Link>
                                    <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></span></div>
                                </div>
                                <div className={classes.itemTitle}>
                                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetoo...
                                </div>
                                <div className={classes.itemDesc}>
                                    Black Strap, Free Size
                                </div>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>142.5</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                            </div>

                        </div>

                        


                        {/* Item goes here /////////////// */}
                        <div className={classes.item}>
                            <div className={classes.itemHolder}>
                                <div className={classes.itemImageholder}>
                                    <Link to="/detail/watch"><img height="200px" width="200px" src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt=""/></Link>
                                    <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></span></div>
                                </div>
                                <div className={classes.itemTitle}>
                                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetoo...
                                </div>
                                <div className={classes.itemDesc}>
                                    Black Strap, Free Size
                                </div>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>142.5</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                            </div>

                        </div>

                        


                        {/* Item goes here /////////////// */}
                        <div className={classes.item}>
                            <div className={classes.itemHolder}>
                                <div className={classes.itemImageholder}>
                                    <Link to="/detail/watch"><img height="200px" width="200px" src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt=""/></Link>
                                    <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></span></div>
                                </div>
                                <div className={classes.itemTitle}>
                                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetoo...
                                </div>
                                <div className={classes.itemDesc}>
                                    Black Strap, Free Size
                                </div>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>142.5</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                            </div>

                        </div>

                        


                        {/* Item goes here /////////////// */}
                        <div className={classes.item}>
                            <div className={classes.itemHolder}>
                                <div className={classes.itemImageholder}>
                                    <Link to="/detail/watch"><img height="200px" width="200px" src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt=""/></Link>
                                    <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></span></div>
                                </div>
                                <div className={classes.itemTitle}>
                                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetoo...
                                </div>
                                <div className={classes.itemDesc}>
                                    Black Strap, Free Size
                                </div>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>142.5</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                            </div>

                        </div>

                        


                        {/* Item goes here /////////////// */}
                        <div className={classes.item}>
                            <div className={classes.itemHolder}>
                                <div className={classes.itemImageholder}>
                                    <Link to="/detail/watch"><img height="200px" width="200px" src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt=""/></Link>
                                    <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></span></div>
                                </div>
                                <div className={classes.itemTitle}>
                                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetoo...
                                </div>
                                <div className={classes.itemDesc}>
                                    Black Strap, Free Size
                                </div>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>142.5</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                            </div>

                        </div>

                        


                        {/* Item goes here /////////////// */}
                        <div className={classes.item}>
                            <div className={classes.itemHolder}>
                                <div className={classes.itemImageholder}>
                                    <Link to="/detail/watch"><img height="200px" width="200px" src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt=""/></Link>
                                    <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></span></div>
                                </div>
                                <div className={classes.itemTitle}>
                                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetoo...
                                </div>
                                <div className={classes.itemDesc}>
                                    Black Strap, Free Size
                                </div>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>142.5</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                            </div>

                        </div>

                        


                        {/* Item goes here /////////////// */}
                        <div className={classes.item}>
                            <div className={classes.itemHolder}>
                                <div className={classes.itemImageholder}>
                                    <Link to="/detail/watch"><img height="200px" width="200px" src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt=""/></Link>
                                    <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></span></div>
                                </div>
                                <div className={classes.itemTitle}>
                                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetoo...
                                </div>
                                <div className={classes.itemDesc}>
                                    Black Strap, Free Size
                                </div>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>142.5</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                            </div>

                        </div>

                        


                        {/* Item goes here /////////////// */}
                        <div className={classes.item}>
                            <div className={classes.itemHolder}>
                                <div className={classes.itemImageholder}>
                                    <Link to="/detail/watch"><img height="200px" width="200px" src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt=""/></Link>
                                    <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></span></div>
                                </div>
                                <div className={classes.itemTitle}>
                                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetoo...
                                </div>
                                <div className={classes.itemDesc}>
                                    Black Strap, Free Size
                                </div>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>142.5</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                            </div>

                        </div>

                        

                        {/* Item goes here /////////////// */}
                        <div className={classes.item}>
                            <div className={classes.itemHolder}>
                                <div className={classes.itemImageholder}>
                                    <Link to="/detail/watch"><img height="200px" width="200px" src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/y/9/k/-original-imagma3fhdjhjnq8.jpeg?q=70" alt=""/></Link>
                                    <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></span></div>
                                </div>
                                <div className={classes.itemTitle}>
                                Fire-Boltt Cobra 1.78" AMOLED Army Grade Build, Bluetoo...
                                </div>
                                <div className={classes.itemDesc}>
                                    Black Strap, Free Size
                                </div>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>142.5</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                            </div>

                        </div>

                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemsListV1