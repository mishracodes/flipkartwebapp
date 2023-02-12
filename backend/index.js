const express = require('express')
const cors = require('cors')
const connectToMongo = require('./db');
const app = express()
const port = 4242
connectToMongo()


app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/categories', require('./routes/categories'))
app.use('/api/products', require('./routes/products'))

app.listen(port, () => {
  console.log(`shipprkart API listening on port ${port}`)
})