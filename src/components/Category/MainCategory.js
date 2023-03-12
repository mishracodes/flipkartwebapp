import React from 'react'
import classes from './Category.module.css'
import CategoryItems from './CategoryItems'
const MainCategory = () => {
   const categories=[
    {
    "_id": "63e78ee2079e97c80b2e634d",
    "name": "Grocery",
    "image": "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    "__v": 0
    },
    {
    "_id": "63e7902d079e97c80b2e6350",
    "name": "Mobiles",
    "image": "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    "__v": 0
    },
    {
    "_id": "63e7902d079e97c80b2e6352",
    "name": "Fashion",
    "image": "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
    "__v": 0
    },
    {
    "_id": "63e7902e079e97c80b2e6354",
    "name": "Electonics",
    "image": "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "__v": 0
    },
    {
    "_id": "63e7902e079e97c80b2e6356",
    "name": "Home",
    "image": "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    "__v": 0
    },
    {
    "_id": "63e7902e079e97c80b2e6358",
    "name": "Appliances",
    "image": "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
    "__v": 0
    },
    {
    "_id": "63e7902e079e97c80b2e635a",
    "name": "Travel",
    "image": "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
    "__v": 0
    },
    {
    "_id": "63e7902e079e97c80b2e635c",
    "name": "Top Offers",
    "image": "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    "__v": 0
    },
    {
    "_id": "63e7902e079e97c80b2e635e",
    "name": "Beauty, Toys & More",
    "image": "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
    "__v": 0
    },
    {
    "_id": "63e7902e079e97c80b2e6360",
    "name": "Two Wheelers",
    "image": "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
    "__v": 0
    }
    ]
   
  return (
    <div  style={{marginTop:"56px"}}>
    <div  className={classes.main__category__container}>
        {categories&&categories.map((e,i)=>{
            return  <CategoryItems key={e._id} name={e.name} image={e.image} id={e._id} elementId={i} />
        })}
       
    </div>
    </div>
  )
}

export default MainCategory