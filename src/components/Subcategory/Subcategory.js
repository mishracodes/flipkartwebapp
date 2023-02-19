import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CategoryHeader from '../Navbar/CategoryHeader';
import classes from './Subcategory.module.css'
const Subcategory = () => {
    const params = useParams();
    const { id } = params;
    const [subcategories, setsubcategories] = useState()
    const getCategories = async () => {
        const result = await fetch(`https://shipprkart.onrender.com/api/subcategories/list/category/${id}`);
        const data = await result.json()
        setsubcategories(data)
    }
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div>
            <CategoryHeader />

            <div className={`${classes.main} body__margin__gap`}>
                <div className={classes.header}>
                    <h2>{id}</h2>
                </div>

                <div className={classes.subcatcardcontainer}>
                    {subcategories && subcategories.map(e => <Link to={`/items/${e.name}`} key={e._id} className={classes.subcatcard}>
                        <div className={classes.cardImage}>
                            <div className={classes.cardImageholder}>
                                <img alt='' src={e.image} />
                            </div>
                        </div>

                        <p>{e.name}</p>
                    </Link>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Subcategory