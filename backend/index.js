const express = require('express')
const cors = require('cors')
const connectToMongo = require('./db');
const app = express()
const PORT = 4242;
connectToMongo()

// var bodyParser = require('body-parser');
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors())
app.use(express.json({verify: (req,res,buf) => { req.rawBody = buf }}));

app.get('/api/healthcheck',(req,res)=>{
  console.log("Health Check Success 200 OK")
  res.send({  healthCheck: "success 200 OK"  })
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/categories', require('./routes/categories'))
app.use('/api/subcategories', require('./routes/subcategories'))
app.use('/api/products', require('./routes/products'))
app.use('/api/searchproducts', require('./routes/searchproducts'))
app.use('/api', require('./routes/createCheckoutSession'))
app.use('/api', require('./routes/webhook'))

app.listen(PORT, () => {
  console.log(`shipprkart API listening on port ${PORT}`)
})