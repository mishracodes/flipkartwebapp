import { Accordion, AccordionDetails, AccordionSummary, Pagination, Slider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import classes from './ItemsListV1.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryHeader from '../Navbar/CategoryHeader';
import star from '../../Assets/star.svg'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
function valuetext(value) {
    return `${value}°C`;
}

const imageLoadError=(source)=>{
    source.target.src = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
        source.onerror = "";
        return true;
}

const ItemsListV1 = () => {

    const [value, setValue] = useState([0, 20001]);
    const {id}=useParams();
    const [itemsList, setitemsList] = useState()
    const [currentPage, setcurrentPage] = useState(1)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const getitemsListForPage= async(page)=>{
        const result = await fetch(`https://shipprkart.onrender.com/api/products/list/subcategory/${id}/${page}`);
        const data = await result.json()
        setitemsList(data)
    }
   const  pageChangeHandler=(event, pageNumber = 1)=> {
        // Your code
        setcurrentPage(pageNumber)
        getitemsListForPage(pageNumber)
        
    }
   
    const getitemsList= async () => {
        const result = await fetch(`https://shipprkart.onrender.com/api/products/list/subcategory/${id}/1`);
        const data = await result.json()
        setitemsList(data)
    }
    useEffect(() => {
        getitemsList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
// console.log('itemslist',itemsList);

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
                        <p>(Showing {(currentPage-1)*20} – {currentPage*20} products of {itemsList&&itemsList.total_results} products)</p>
                    </div>
                    <div className={classes.mainBar__shortBy}>
                        <h2>Short By</h2>
                        <p className={classes.active}>Popularity</p>
                        <p>Price--Low to High</p>
                        <p>Price--High to Low</p>
                    </div>
                    <div className={`${classes.itemsContainer} row`}>



                        


                        {/* Item goes here /////////////// */}
                        {itemsList&&itemsList.results.map(e=><div key={e._id} className={`${classes.item} col-md-3`}>
                            <div className={classes.itemHolder}>
                                <Link to={`/detail/${e.name}`} style={{textDecoration:'none'}} state={{_id: e._id}}>
                                <div className={classes.itemImageholder}>
                                    <div className={classes.itemImage}>
                                            <img onError={imageLoadError} src={`https://wsrv.nl/?url=${e.image[0]}`} alt=""/>
                                            
                                    </div>
                                    
                                </div>
                                </Link>
                                <div  className={classes.markFavourite}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" className="_1l0elc" width="22" height="22" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" className="eX72wL" stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg></span></div>
                                <Link to={`/detail/${e.name}`} style={{textDecoration:'none'}}>
                                    <div className={classes.itemTitle}>
                                    {e.name}
                                    </div>
                                    <div className={classes.itemDesc}>
                                        {e.brand}
                                    </div>
                                </Link>
                                <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>{e.rate}<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>{e.count}</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹{e.discountPrice}</span>
                                        <span>₹{e.price}</span>
                                        <span>{Math.round(((e.price-e.discountPrice)/e.price)*100)}% off</span>
                                    </div>
                            </div>

                        </div>)}

                       


                        

                    </div>

                    {/* ///pagenation */}
                    <Stack spacing={2} className={classes.pagination}>
                        <Pagination onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)} count={itemsList&&itemsList.total_pages} color="primary" />
                    </Stack>


                </div>
            </div>
        </>
    )
}

export default ItemsListV1