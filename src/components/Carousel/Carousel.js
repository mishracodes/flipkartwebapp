import React from 'react'
import classes from './Carousel.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div data-bs-interval="2000" className="carousel-item active">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/3cf0cdf063be8354.jpg?q=50" className="d-block w-100" height="280px" alt="..."/>
    </div>
    <div data-bs-interval="2000" className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/3be432e05585c83e.jpg?q=50" className="d-block w-100" height="280px" alt="..."/>
    </div>
    <div data-bs-interval="2000" className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/1a270c65b3ab2b3d.jpg?q=50" className="d-block w-100" height="280px" alt="..."/>
    </div>
    <div data-bs-interval="2000" className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c0bec65432fb07fc.jpg?q=50" className="d-block w-100" height="280px" alt="..."/>
    </div>
  </div>
  <button className={`${classes['carousel-control-prev']}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <ArrowBackIosNewIcon/>
  </button>
  <button className={`${classes['carousel-control-next']}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <ArrowForwardIosIcon/>
  </button>
</div>
  )
}

export default Carousel