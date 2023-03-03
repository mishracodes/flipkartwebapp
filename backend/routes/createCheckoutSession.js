const express = require('express');
const router = express.Router();
require('dotenv').config();
const stripe=require('stripe')(process.env.STRIPE_PRIVATE_KEY);

router.post('/create-checkout-session', async (req, res)=>{
    
    try{
        const {cart,email}=req.body
        
        const transformedItems=cart.map(e=>({
            price_data: {
                currency: 'inr',
                product_data: {
                  name: e.name,
                  images:[e.image]
                },
                unit_amount: e.price*100,
              },
              quantity: e.quantity,
        }))
    
        
    
        const session = await stripe.checkout.sessions.create({
            shipping_address_collection: {allowed_countries: ['US', 'CA','GB','IN']},
            shipping_options: [
                {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {amount: 0, currency: 'inr'},
                    display_name: 'Free shipping',
                    delivery_estimate: {
                    minimum: {unit: 'business_day', value: 5},
                    maximum: {unit: 'business_day', value: 7},
                    },
                },
                }, {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {amount: 2500, currency: 'inr'},
                        display_name: 'Next-Day-Shipping',
                        delivery_estimate: {
                        minimum: {unit: 'business_day', value: 1},
                        maximum: {unit: 'business_day', value: 2},
                        },
                    },
                    },
            ],
            line_items: transformedItems,
            mode: 'payment',
            success_url: `http://localhost:3000/success`,
            cancel_url: `http://localhost:3000/checkout`,
            metadata:{
                email,
                images: JSON.stringify(cart.map(item=>item.image))
            }
        }) 
    
        res.status(200).json({url: session.url})
          
    }
    catch(error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  })
module.exports = router;

  