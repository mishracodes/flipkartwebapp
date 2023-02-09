import React from 'react'
import star from '../../Assets/star.svg'
import classes from './CuratedCategoryList.module.css'
const CuratedCategoryList = () => {
    const categoryList = [


        {
            id: 1,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kvlaaa80/shirt/2/h/g/m-hlsh013072-highlander-original-imag8gmygb2qh7gs.jpeg?q=70',
            name: 'HIGHLANDER Men Printed Casual Black Shirt',
            priceR: '(1,852)',
            category: 'Tripods, Gimbals, Bags..'
        },

        {
            id: 2,
            imgSrc: 'https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70',
            name: 'Printers',
            priceR: 'From ₹3999',
            category: 'HP'
        },

        {
            id: 3,
            imgSrc: 'https://rukminim1.flixcart.com/image/200/200/l5iid8w0/printer/l/z/7/-original-imagg6cmyt9yfvta.jpeg?q=70',
            name: 'Printers',
            priceR: 'From ₹2336',
            category: 'Canon'
        },

        {
            id: 4,
            imgSrc: 'https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70',
            name: 'Monitors',
            priceR: 'From ₹9999',
            category: 'SAMSUNG'
        },

        {
            id: 5,
            imgSrc: 'https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70',
            name: 'Top Mirrorless Cameras',
            priceR: 'Shop Now!',
            category: 'Canon, Sony, Fujifilm...'
        },

        {
            id: 6,
            imgSrc: 'https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70',
            name: 'Projectors',
            priceR: 'From ₹9999',
            category: 'ZEBRONICS'
        },

        {
            id: 7,
            imgSrc: 'https://rukminim1.flixcart.com/image/200/200/kgsb1jk0/monitor/f/d/z/vg27aql1a-tuf-vg27aql1a-asus-original-imafwyeptd8ysndr.jpeg?q=70',
            name: 'ASUS Monitors',
            priceR: 'From ₹4999',
            category: 'ASUS'
        },
        {
            id: 8,
            imgSrc: 'https://rukminim1.flixcart.com/image/200/200/l5iid8w0/printer/l/z/7/-original-imagg6cmyt9yfvta.jpeg?q=70',
            name: 'Printers',
            priceR: 'From ₹2336',
            category: 'Canon'
        },

        {
            id: 9,
            imgSrc: 'https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70',
            name: 'Monitors',
            priceR: 'From ₹9999',
            category: 'SAMSUNG'
        },

        {
            id: 10,
            imgSrc: 'https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70',
            name: 'Top Mirrorless Cameras',
            priceR: 'Shop Now!',
            category: 'Canon, Sony, Fujifilm...'
        },

    ]
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.name}>
                    <h2>Suggested for You</h2>
                    <h3>Similar to Items You Viewed</h3>
                </div>
                <div className={classes.viewAll}>
                    <a href="/">VIEW ALL</a>
                </div>
            </div>
            <div className={classes.curatedList} >
                <div className={classes.curatedListChild}>
                    {categoryList.map((e) => {
                        return (<div key={e.id} className={classes.item}>

                            <div className={classes.itemImage}>
                                <div className={classes.itemImageContainer}>
                                    <img src={e.imgSrc} alt="" />
                                </div>
                            </div>
                            <div  className={classes.itemUrl}>
                                <div className={classes.itemDetails}>
                                    <div className={classes.itemName}><a href="/">{e.name}</a></div>
                                    <div className={classes.starRating}>
                                        <span className={classes.starIcon}>
                                            <div>4<img src={star} alt="" /></div>
                                        </span>
                                        <span className={classes.rating}>{e.priceR}</span>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <span>₹491</span>
                                        <span>₹1,199</span>
                                        <span>59% off</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.markFavorite}>
                                <div className="_36FSn5"><svg xmlns="http://www.w3.org/2000/svg" className="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#b7b4b4" className="eX72wL" stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg></div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default CuratedCategoryList