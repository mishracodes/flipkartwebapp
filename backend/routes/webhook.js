const express = require("express");
const router = express.Router();
const admin = require('firebase-admin')
require('dotenv').config();
// secure a connection to Firebase from the backend
const serviceAccount = require('/etc/secrets/permission.json')
// const serviceAccount = require('../permission.json')
const app = !admin.apps.length ? admin.initializeApp({credential: admin.credential.cert(serviceAccount)}) : admin.app();

//Establish connection to Stripe
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session)=>{

    return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
        amount_subtotal:session.amount_subtotal/100,
        amount_total: session.amount_total/100,
        amount_shipping: session.total_details.amount_shipping / 100,
        currency: session.currency,
        customer_details:session.customer_details,
        payment_status:session.payment_status,
        shipping_details:session.shipping_details,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        order_placed:'success'
    }, { merge: true })
    .then(()=>{
        console.log(`SUCCESS: Order ${session.id} has been added to the DB`)
    })
    .catch((err)=>{console.log(err.message)})
}

router.post('/webhook',express.raw({type: 'application/json'}), async (req, res) => {
    
    let event = req.rawBody;
    if (endpointSecret) {
        // Get the signature sent by Stripe
        const signature = req.headers['stripe-signature'];
        try {
          event = stripe.webhooks.constructEvent(
            req.rawBody,
            signature,
            endpointSecret
          );
        } catch (err) {
          console.log(`⚠️  Webhook signature verification failed.`, err.message);
          return res.sendStatus(400);
        }
      }
        //Handle the checkout.session.completed event
        if(event.type==='checkout.session.completed'){
            const session = event.data.object;

            //Fulfill the order...
            return fulfillOrder(session)
            .then(()=> res.status(200))
            .catch((err)=>res.status(400).send(`Webhook Error: ${err.message}`))
        }
        
        res.sendStatus(200)
       
})
module.exports = router;
